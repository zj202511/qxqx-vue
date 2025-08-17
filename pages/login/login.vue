<template>
	<view class="login-container">
		<view class="form-container">
			<view class="back-btn" @click="goBack">
				<text class="iconfont">←</text>
			</view>
			<!-- 头像选择 -->
			<view class="form-group">
				<text class="form-label">选择头像</text>
				<button open-type="chooseAvatar" class="avatar-btn" @chooseavatar="onChooseAvatar">
					<image :src="avatarUrl || '../../static/images/default_avatar.png'" class="avatar-image" />
				</button>
			</view>

			<!-- 昵称输入 -->
			<view class="form-group">
				<input class="nickname-input" placeholder="请输入昵称" type="nickname" v-model="nickname" />
			</view>

			<!-- 登录按钮 -->
			<button class="login-btn primary" :disabled="!avatarUrl || !nickname || isLoading" @tap="onLogin">
				{{ isLoading ? '登录中...' : '立即登录' }}
			</button>
		</view>
	</view>
</template>

<script>
	const app = getApp();

	export default {
		data() {
			return {
				avatarUrl: '',
				nickname: '',
				isLoading: false,
				openid: '',
				tempAvatarPath: '' // 添加临时头像路径
			};
		},
		onLoad() {
			const userinfo = uni.getStorageSync('userinfo');
			console.log(userinfo)
			if (userinfo) {
				// 回显头像和昵称
				this.avatarUrl = userinfo.avatar;
				this.nickname =
					userinfo.user_nickname ||
					userinfo.nickname ||
					userinfo.username ||
					userinfo.user_name ||
					'';
				this.openid = userinfo.openid || '';
				this.quickLogin();
			}

		},
		methods: {
			onChooseAvatar(e) {
				const avatar = e.detail.avatarUrl;
				this.avatarUrl = avatar;

				const tempFilePath = avatar;
				const fs = uni.getFileSystemManager();
				const targetPath = `${wx.env.USER_DATA_PATH}/avatar_${Date.now()}.jpg`;

				// 判断是否是微信 PC 的特殊路径
				const isWechatPCPath = tempFilePath.startsWith('wxfile://') || tempFilePath.includes('WeappFileSystem');

				if (isWechatPCPath) {
					try {
						// 特殊处理 PC 路径
						const targetDir = `${wx.env.USER_DATA_PATH}/tmp_avatars`;
						try {
							fs.accessSync(targetDir);
						} catch {
							fs.mkdirSync(targetDir, true);
						}

						const finalPath = `${targetDir}/avatar_${Date.now()}.jpg`;
						fs.copyFileSync(tempFilePath, finalPath);
						this.tempAvatarPath = finalPath;
					} catch (err) {
						console.error('电脑版路径处理失败:', err);
						this.handleAvatarError(); // 提示用户手动选择
					}
				} else {
					// 普通路径处理
					fs.copyFile({
						srcPath: tempFilePath,
						destPath: targetPath,
						success: () => {
							this.tempAvatarPath = targetPath;
						},
						fail: (err) => {
							console.error('拷贝失败:', err);
							this.handleAvatarError();
						}
					});
				}
			},
			handleAvatarError() {
				uni.showModal({
					title: '提示',
					content: '头像路径处理失败，可能是微信电脑版限制，请手动选择图片',
					success: (res) => {
						if (res.confirm) {
							uni.chooseImage({
								count: 1,
								success: (chooseRes) => {
									const filePath = chooseRes.tempFilePaths[0];
									this.avatarUrl = filePath;
									this.tempAvatarPath = filePath;
								}
							});
						}
					}
				});
			},


			onChooseAvatar12(e) {
				console.log('选择头像事件:', e.detail);
				console.log('原始头像URL:', e.detail.avatarUrl);

				// 微信头像选择返回的是临时文件路径
				this.tempAvatarPath = e.detail.avatarUrl;
				this.avatarUrl = e.detail.avatarUrl; // 用于预览
				console.log('设置临时头像路径:', this.tempAvatarPath);

				// 验证文件路径
				if (this.tempAvatarPath) {
					uni.getFileInfo({
						filePath: this.tempAvatarPath,
						success: (res) => {
							console.log('头像文件信息:', res);
						},
						fail: (err) => {
							console.error('头像文件验证失败:', err);
						}
					});
				}
			},

			async onLogin() {
				console.log('开始登录流程...');
				console.log('昵称:', this.nickname);
				console.log('头像路径:', this.tempAvatarPath);

				if (!this.tempAvatarPath || !this.nickname) {
					return uni.showToast({
						title: '请完善信息',
						icon: 'none'
					});
				}

				this.isLoading = true;
				uni.showLoading({
					title: '登录中...',
					mask: true
				});

				try {
					// 1. 处理头像（微信头像选择返回的是临时文件路径）
					console.log('完整头像路径:', this.tempAvatarPath);

					// 微信头像选择返回的是临时文件路径，直接上传
					console.log('微信头像，直接上传...');
					const finalAvatarUrl = await this.uploadAvatar(this.tempAvatarPath);

					// 2. 获取微信 code → openid
					const [loginErr, loginRes] = await uni.login({
						provider: 'weixin'
					});
					if (loginErr || !loginRes.code) throw new Error('微信登录失败');

					const [err, res] = await this.getOpenId(loginRes.code);
					if (err || !res.data?.data?.openid) throw new Error('获取openid失败');

					// 3. 调用后端登录
					await this.thirdlogin(
						res.data.data.openid,
						this.nickname,
						finalAvatarUrl,
						2,
						1
					);

				} catch (e) {
					uni.showToast({
						title: e.message || '登录失败',
						icon: 'none'
					});
				} finally {
					uni.hideLoading();
					this.isLoading = false;
				}
			},

			// 下载远程头像后上传
			async downloadAndUploadAvatar(url) {
				return new Promise((resolve, reject) => {
					uni.downloadFile({
						url,
						success: async (res) => {
							if (res.statusCode === 200) {
								try {
									const uploadedUrl = await this.uploadAvatar(res.tempFilePath);
									resolve(uploadedUrl);
								} catch (e) {
									reject(e);
								}
							} else {
								reject(new Error('下载头像失败'));
							}
						},
						fail: () => reject(new Error('下载头像失败'))
					});
				});
			},

			// 上传本地文件（头像）
			uploadAvatar(filePath) {


				console.log('上传本地文件:', filePath);
				console.log('上传URL:', app.globalData.site_url + 'Login.uploadAvatar');

				return new Promise((resolve, reject) => {

					// 检查文件路径是否存在
					if (!filePath) {
						reject(new Error('文件路径为空'));
						return;
					}

					const uploadConfig = {
						url: app.globalData.site_url + 'Login.uploadAvatar',
						filePath: filePath,
						name: 'avatar',
						formData: {
							// 可以添加额外的表单数据
						}
					};
					console.log('上传配置:', uploadConfig);

					uni.uploadFile({
						...uploadConfig,
						success: (res) => {
							console.log('upload success:', res);
							console.log('响应数据:', res.data);
							try {
								const parsed = JSON.parse(res.data);
								console.log('解析后的数据:', parsed);
								const data = parsed.data;
								if (data.code === 0) {
									resolve(data.url);
								} else {
									console.error('上传返回失败:', data);
									reject(new Error(data.msg || '上传失败'));
								}
							} catch (e) {
								console.error('上传响应解析失败:', res.data);
								console.error('解析错误:', e);
								reject(new Error('服务器响应格式错误'));
							}
						},
						fail: (err) => {
							console.error('upload fail:', err);
							reject(new Error('头像上传失败'));
						}
					});
				});
			},

			getOpenId(code) {
				return new Promise((resolve) => {
					uni.request({
						url: app.globalData.site_url + 'App.Login.getUnionid',
						method: 'GET',
						data: {
							code
						},
						success: (res) => resolve([null, res]),
						fail: (err) => resolve([err, null])
					});
				});
			},
			async quickLogin() {
				try {
					this.isLoading = true;
					uni.showLoading({
						title: '正在登录...',
						mask: true
					});

					const [loginErr, loginRes] = await uni.login({
						provider: 'weixin'
					});
					if (loginErr || !loginRes.code) throw new Error('获取微信 code 失败');

					const [err, res] = await this.getOpenId(loginRes.code);
					if (err || !res.data?.data?.openid) throw new Error('获取 openid 失败');

					this.openid = res.data.data.openid;

					await this.thirdlogin(
						this.openid,
						this.nickname,
						this.avatarUrl,
						2, // login type
						1 // source
					);
				} catch (err) {
					console.error('快速登录失败:', err);
					uni.showToast({
						title: err.message || '登录失败',
						icon: 'none'
					});
				} finally {
					uni.hideLoading();
					this.isLoading = false;
				}
			},
			thirdlogin(openid, nickname, avatar, type, source) {
				console.log('调用登录接口:', {
					openid,
					nickname,
					avatar
				});
				return new Promise((resolve, reject) => {
					uni.request({
						url: app.globalData.site_url + 'Login.LoginByThird',
						method: 'POST',
						data: {
							openid,
							nicename: nickname,
							avatar,
							type,
							source,
							sign: this.sort2url({
								openid,
								type
							})
						},
						success: (res) => {
							if (res.data?.data?.code !== 0) {
								reject(new Error(res.data?.data?.msg || '登录失败'));
								return;
							}

							const userinfo = res.data.data.info[0];
							app.globalData.userinfo = userinfo;

							// 持久化存储到本地
							uni.setStorageSync('userinfo', userinfo);
							// 设置登录状态
							uni.setStorageSync('isLoggedIn', true);
							uni.showToast({
								title: '登录成功',
								icon: 'success'
							});

							setTimeout(() => {
								let url = '../my/my';
								let gData = app.globalData;
								if (gData.login_jump.page != '') {
									url = gData.login_jump.page;
								}
								uni.reLaunch({
									url: url
								});
							}, 1000);

							resolve(res);
						},
						fail: reject
					});
				});
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			sort2url(params) {
				const keys = Object.keys(params).sort();
				let str = keys.map(k => `${k}=${params[k]}`).join('&');
				str += '&' + app.globalData.sign_key;
				const md5 = require('@/static/js/md5.js');
				return md5.hex_md5(str);
			}
		}

	};
</script>


<style>
	/* 容器样式 */
	.login-container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 40rpx;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}

	.back-btn {
		position: absolute;
		top: 100rpx;
		left: 30rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.back-btn .iconfont {
		color: #fff;
		font-size: 40rpx;
		font-weight: bold;
	}

	/* Logo区域 */
	.logo-container {
		text-align: center;
		margin-bottom: 80rpx;
	}

	.logo-image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
	}

	.app-name {
		display: block;
		margin-top: 30rpx;
		font-size: 40rpx;
		font-weight: bold;
		color: #333;
	}

	.welcome-text {
		display: block;
		margin-top: 15rpx;
		font-size: 28rpx;
		color: #666;
	}

	/* 表单区域 */
	.form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* 子元素水平居中 */
		width: 100%;
		max-width: 500rpx;
	}

	/* 表单组 */
	.form-group {
		margin-bottom: 40rpx;
	}

	.form-label {
		display: block;
		margin-bottom: 15rpx;
		font-size: 28rpx;
		color: #333;
		font-weight: 500;
		text-align: center;
	}

	/* 头像选择 */
	.avatar-btn {
		padding: 0;
		margin: 0;
		background: none;
		border: none;
		line-height: 1;
	}

	.avatar-btn::after {
		border: none;
	}

	.avatar-image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border: 2rpx solid #eee;
		background-color: #f5f5f5;
	}

	/* 昵称输入 */
	.nickname-input {
		width: 70%;
		height: 80rpx;
		padding: 0 20rpx;
		border: 2rpx solid #ddd;
		border-radius: 10rpx;
		font-size: 28rpx;
		background-color: #fff;
		text-align: center;
		/* 确保居中 */
		display: block;
		margin: 0 auto;
	}

	.nickname-input:focus {
		border-color: #07C160;
		outline: none;
	}

	/* 登录按钮 */
	.login-btn {
		width: 80%;
		height: 90rpx;
		border-radius: 10rpx;
		font-size: 32rpx;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 30rpx;
		transition: all 0.3s;
	}

	.login-btn:disabled {
		opacity: 0.6;
	}

	.login-btn.primary {
		background-color: #07C160;
		color: #fff;
	}

	.login-btn.wechat {
		background-color: #09BB07;
		color: #fff;
	}

	.wechat-icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 15rpx;
	}

	/* 分隔线 */
	.divider {
		display: flex;
		align-items: center;
		margin: 40rpx 0;
	}

	.divider-line {
		flex: 1;
		height: 1rpx;
		background-color: #ddd;
	}

	.divider-text {
		padding: 0 20rpx;
		font-size: 26rpx;
		color: #999;
	}

	/* 底部信息 */
	.footer {
		margin-top: auto;
		padding-top: 40rpx;
		text-align: center;
	}

	.footer-text {
		font-size: 24rpx;
		color: #999;
	}
</style>