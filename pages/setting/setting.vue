<template>
	<view class="setting-all-wrap">
		<view class="touce-wrap">
			<view @click="xieyi" class="touce-item">
				<text class="touch_txt">《用户服务协议》</text>
				<text class="set-num-txt iconfont icon-jinrujiantou"></text>
			</view>
			<view @click="zhengce" class="touce-item">
				<text class="touch_txt">《隐私保护政策》</text>
				<text class="set-num-txt iconfont icon-jinrujiantou"></text>
			</view>
			<view @click="touchMe" class="touce-item">
				<text class="touch_txt2">关于我们</text>
				<text class="set-num-txt iconfont icon-jinrujiantou"></text>
			</view>
			<view @click="clearcache" class="touce-item">
				<text class="touch_txt2"> 缓存清除</text>
				<text class="set-num-txt">{{cacheSize}}MB</text>
			</view>
		</view>

		<view @click="logout" class="logout-wrap">
			<text>退出账号</text>
		</view>
	</view>
</template>

<script>
	const app = getApp();

	export default {
		data() {
			return {
				cacheSize: 0
			}
		},
		onLoad() {
			this.getcache(); // 页面加载时获取缓存大小
		},
		methods: {
			// 返回首页
			backHome() {
				uni.reLaunch({
					url: '/pages/index/index', // 替换为你的首页路径
				});
			},

			xieyi() {
				uni.navigateTo({
					url: '../login/xieyi?type=115',
				});
			},

			zhengce() {
				uni.navigateTo({
					url: '../login/xieyi?type=123',
				});
			},

			touchMe() {
				uni.navigateTo({
					url: '../lianxi-we/lianxi-we',
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});
			},

			updateversion() {
				uni.showToast({
					icon: 'none',
					title: '已经是最新版本'
				});
			},

			logout() {
				uni.removeStorage({
					key: 'userinfo',
					success: function(res) {
						console.log('退出登录-清除缓存成功');
					}
				});
				app.globalData.userinfo = '';
				app.globalData.login_jump.page = '';
				app.globalData.login_jump.keyword = '';
				app.globalData.login_jump.data = {};
				uni.removeStorageSync('userinfo');
				uni.removeStorageSync('isLoggedIn');
				uni.reLaunch({
					url: '../index/index',
				});
			},

			// 获取清除的缓存
			getcache() {
				// #ifdef APP-PLUS
				var self = this;
				plus.cache.calculate(function(size) {
					if (size < 1024) {
						self.cacheSize = (size / 1024).toFixed(2); // 转换为KB并保留2位小数
					} else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
						self.cacheSize = (size / 1024 / 1024).toFixed(2); // 转换为MB并保留2位小数
					} else if (size / 1024 / 1024 >= 1) {
						self.cacheSize = (size / 1024 / 1024).toFixed(2); // 转换为MB并保留2位小数
					}
				});
				// #endif
			},

			// APP端清除缓存
			clearcache() {
				// #ifdef APP-PLUS
				var self = this;
				plus.cache.clear();
				// #endif
				uni.showToast({
					title: '清除成功!',
					icon: 'none',
					success() {
						self.getcache(); // 清除后重新获取缓存大小
					}
				});
			},
		}
	}
</script>

<style>
	page {
		background-color: #F2F6FC;
	}

	.setting-all-wrap {
		margin: 0 auto;
		border-top: 4rpx solid #E8E8E8;
		padding-top: 10rpx;
		/* 为顶部按钮留出空间 */
	}

	/* 返回首页按钮 */
	.back-home-btn {
		position: fixed;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.7);
		color: white;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		top: 0px;
		text-align: left;
		font-size: 24rpx;
		display: flex;
		/* justify-content: center; */
		align-items: center;
	}

	.back-home-btn .iconfont {
		margin-right: 8rpx;
	}

	.touce-wrap {
		height: 357rpx;
		margin: 0 auto;
		background-color: #FFFFFF;
	}

	.touce-item {
		height: 90rpx;
		line-height: 90rpx;
		padding-left: 21rpx;
		border-bottom: 2rpx solid #F5F5F5;
	}

	.touch_txt {
		display: inline-block;
		width: 82%;
		height: 100%;
		color: #000000;
		font-size: 30rpx;
	}

	.touch_txt2 {
		display: inline-block;
		width: 82%;
		height: 100%;
		color: #000000;
		font-size: 30rpx;
		margin-left: 20rpx;
	}

	.set-num-txt {
		display: inline-block;
		width: 15%;
		text-align: right;
		position: absolute;
		right: 30rpx;
	}

	/* 退出账号 */
	.logout-wrap {
		height: 90rpx;
		line-height: 90rpx;
		margin-top: 20rpx;
		text-align: center;
		font-size: 30rpx;
		color: #FF1B20;
		background-color: #FFFFFF;
	}
</style>