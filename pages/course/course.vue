<template>
	<view class="page">
		<view class="custom-navbar">
			<!-- 返回按钮 -->
			<view class="back-btn" @click="goBack">
				<text class="iconfont icon-jiantouzuo">←</text>
			</view>
			<!-- 标题 -->
			<text class="navbar-title">视频中心</text>
		</view>

		<view class="header-row">
			<view class="search-all-wrap" style="display: none;">
				<view class="search-wrap" @click="search">
					<text class="iconfont icon-faxianchaxun"></text>
					<input disabled="true" class="uni-input" placeholder="搜索视频"
						placeholder-style="color:#C7C7C7; font-size:28rpx;" />
				</view>
			</view>
			<view @click="shopcar" slot="right" style="position: relative; right: -30rpx;display: none;">
				<view class="new_gouwuche">
					<image class="gowucheimage" src="../../static/gouwuche.png" mode="aspectFit"></image>
					<template v-if="nums != 0">
						<view class="gouwunums">
							<view class="carnums">{{nums}}</view>
						</view>
					</template>
				</view>
			</view>
		</view>

		<view style="background-color: #FFFFFF;height: 50rpx; " class="course-abs-wrap">
			<view class="flex align-center font-weight-bold course-tab">
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="10" :scroll-into-view="currentScrollId">
					<view class="courseclass-tab-item" :id="'scroll_item' + index" @click="changeTab(index, item.id)"
						v-for="(item, index) in tabBars" :key="index"
						:class="tabIndex === index ? 'courseclass-text-main' : 'courseclass-text-light-muted'">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view class="mark-type-wrap" style="display: none;">
				<view class="flex align-center font-weight-bold mark-sub-tab">
					<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
						<view class="mark-sub-item" @click="changeSubTab(index)" v-for="(item, index) in tabBarsCourse"
							:key="index" :class="subTabIndex === index ? 'text-main' : 'text-light-muted'">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<scroll-view class="scroll-container" scroll-y="true" @scrolltolower="loadMoreData">
			<view class="content">
				<view class="live-list" v-for="(item, index) in list" :key="item.id">
					<view class="live-list-img-wrap">
						<image class="live-list-img" :src="item.thumb" mode="aspectFill"></image>
						<text class="course-title-icon" v-if="item.sort === 0">内容</text>
						<text class="course-title-icon" v-else-if="item.sort === 1">课程</text>
						<text class="course-title-icon" v-else>直播</text>
					</view>

					<view class="live-list-info">
						<view class="live-c-title">{{ item.name }}</view>
						<view v-if="item.sort === 0"
							:class="item.islive == 1 ? 'live-status living-status' : 'live-status-tuwen'">
							{{ item.lesson }}
						</view>
						<view v-else :class="item.islive == 1 ? 'live-status living-status' : 'live-status'">
							{{ item.lesson }}
						</view>

						<view class="live-teacher-price">
							<image class="live-teacher-avatar" :src="item.avatar" mode="aspectFill"></image>
							<text class="teacher-name">{{ item.user_nickname }}</text>
							<view class="price-wrap">
								<!-- type为0的用户，只显示观看按钮 -->
								<button v-if="isLoggedIn && userInfo && userInfo.type === '0'" class="watch-button"
									@tap="viewLiveInfo(item)">
									<text class="iconfont icon-bofang"></text>
									<text>观看</text>
								</button>

								<!-- 其他已登录用户，显示分享和观看按钮 -->
								<template v-else-if="isLoggedIn && userInfo">
									<button class="share-button" open-type="share" @tap="shareCourse(item)">
										<text class="iconfont icon-fenxiang"></text>
										<text>分享</text>
									</button>
									<button class="watch-button" @tap="viewLiveInfo(item)">
										<text class="iconfont icon-bofang"></text>
										<text>观看</text>
									</button>
								</template>

								<!-- 未登录用户 -->
								<button v-else class="share-button" @tap="goToLogin">
									<text class="iconfont icon-fenxiang"></text>
									<text>登录分享</text>
								</button>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 空态 -->
			<view v-if="kongkong" class="xiangziwrap">
				<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
				<text class="xiangzi_txt">暂无视频</text>
			</view>

			<!-- 加载更多 -->

			<view v-if="loadingMore" class="loading-more">加载中...</view>
			<view :style="{ height: (80 + scrollH) + 'rpx' }">
				<text>&nbsp;</text>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import courseList from '@/components/common/course-list.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	const app = getApp();

	export default {
		components: {
			courseList,
			uniNavBar
		},
		data() {
			return {
				scrollH: 0,
				tabIndex: 0,
				subTabIndex: 0,
				course_ID: '',
				tabBars: [],
				list: [],
				loadmore: "上拉加载更多",
				hotCate: [],
				topicList: [],
				keyword: '',
				kongkong: false,
				sdata: '',
				nums: '',
				system_top: 0,
				userInfo: '',
				tiListByTab: [],
				tabBarsCourse: [],
				scroll_left: 10,
				currentScrollId: '',
				currentShareItem: null,
				loadingMore: false,
				statusBarHeight: 0,
				isLoggedIn: false,
				loginChecked: false
			}
		},
		onShow() {
			this.checkLogin(true)
		},
		onReady() {
			this.initPageHeight();
			this.getnums();
		},
		onLoad() {
			if (app.globalData.userinfo != '') {
				this.userInfo = app.globalData.userinfo;
			}
			this.getnums();
			this.initPageHeight();
			this.getData();
		},
		methods: {
			async checkLogin(force = false) {
				if (this.loginChecked && !force) return
				try {
					const userInfo = app.globalData.userinfo;
					// 增加字段验证
					this.isLoggedIn = !!(userInfo?.token && userInfo?.id)

					this.loginChecked = true
				} catch (e) {
					console.error('登录检查错误:', e)
					this.isLoggedIn = false
				}
			},
			goToLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			initPageHeight() {
				uni.getSystemInfo({
					success: (res) => {
						this.scrollH = res.safeAreaInsets ? res.safeAreaInsets.bottom : 0;
						this.statusBarHeight = res.statusBarHeight;
					}
				});
			},
			loadMoreData() {
				if (this.loadingMore) return; // 避免重复加载
				this.loadingMore = true;

				// 模拟加载
				setTimeout(() => {
					// 加数据
					// this.list.push(...新数据);

					this.loadingMore = false;
				}, 1000);
			},

			openLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			onInput(e) {
				this.keyword = e.detail.value;
				this.GetMyCourse(this.tabIndex, this.keyword);
			},
			getData() {
				uni.request({
					url: app.globalData.site_url + 'Homeknowledge.GetIndex',
					data: {
						'gradeid': getApp().globalData.grade_class.id
					},
					success: (res) => {
						let data = res.data.data;
						if (parseInt(res.data.data.code) !== 0) return;
						this.tabBars = data.info[0].courseclass;
						this.course_ID = this.tabBars[0].id;
						this.GetCourseList(this.tabBars[0].id, 0);
					}
				});
			},
			GetCourseList(kid, subIndex) {
				let sort = 0;
				if (subIndex == 1) {
					sort = 2;
				} else if (subIndex < 1) {
					sort = 3;
				}

				uni.request({
					url: app.globalData.site_url + 'Knowledge.GetClassCourse',
					method: 'GET',
					data: {
						'p': 1,
						'knowledge_id': kid,
						'sort': sort,
						'type': subIndex
					},
					success: res => {
						if (res.data.data.code == 0) {
							this.kongkong = false;
							this.list = res.data.data.info;
							if (this.list.length == 0) {
								this.kongkong = true;
							}
						} else {
							this.kongkong = true;
						}

					},
				});
			},
			changeTab(index, classid) {
				this.tabIndex = index;
				this.subTabIndex = 0;
				this.course_ID = classid;
				this.GetCourseList(classid, 0);
			},
			changeSubTab(index) {
				this.subTabIndex = index;
				this.list = [];
				this.GetCourseList(this.course_ID, this.subTabIndex);
			},
			onChangeTab(e) {
				this.subTabIndex = e.detail.current;
				this.GetCourseList(this.course_ID, this.subTabIndex);
			},
			loadmoreEvent() {
				if (this.loadmore !== '上拉加载更多') return;
				this.loadmore = '加载中...';
				setTimeout(() => {
					this.list = [...this.list, ...this.list];
					this.loadmore = '上拉加载更多';
				}, 2000)
			},
			viewLiveInfo(item) {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Course.GetDetail',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token,
						'courseid': item.id
					},
					success: res => {
						if (!res.data || !res.data.data) {
							uni.showToast({ title: '数据异常', icon: 'none' });
							return;
						}
						if (res.data.data.code != 0) {
							uni.navigateTo({ url: '../../../pages/login/login' });
							return;
						}
						let info = res.data.data.info[0] || {};
						if (info.type == 7) {
							uni.showToast({ title: '白板直播暂未接入', icon: 'none' });
						} else {
							// 拼接和分享一样的参数
							const sharer_id = gData.userinfo.id;
							uni.navigateTo({
								url: `../../packageB/pages/live-info/live-infoplay?sharer_id=${sharer_id}&liveuid=${info.uid}&courseid=${info.id}&lessonid=0&thumb=${encodeURIComponent(info.thumb || '')}`
							});
						}
					}
				});
			},
			getnums() {
				if (!app.globalData.userinfo) return;

				uni.request({
					url: app.globalData.site_url + 'Cart.GetNums',
					method: 'POST',
					data: {
						'uid': app.globalData.userinfo.id,
						'token': app.globalData.userinfo.token,
					},
					success: res => {
						if (res.data.data.code == 0) {
							this.nums = res.data.data.info[0].nums;
						}
					},
				});
			},
			search() {
				uni.navigateTo({
					url: "../search/search"
				})
			},
			goBack() {
				uni.navigateTo({
					url: '../my/my'
				})
			},
			shopcar() {
				if (!app.globalData.userinfo) {
					uni.navigateTo({
						url: '../login/login'
					})
					return;
				}

				uni.navigateTo({
					url: '../shop-car/shop-car',
				});
			},
			// 修复后的分享方法
			shareCourse(item) {
				console.log('分享课程:', item);
				this.currentShareItem = item;

				// 显示分享菜单
				uni.showShareMenu({
					withShareTicket: true,
					menus: ['shareAppMessage', 'shareTimeline'],
					success: () => {
						console.log('分享菜单调起成功');
					},
					fail: (err) => {
						console.error('分享失败', err);
						uni.showToast({
							title: '分享功能不可用',
							icon: 'none'
						});
					}
				});
			},
			onShareAppMessage(res) {

				if (res.from === 'button' && this.currentShareItem) {
					let path = '';
					path =
						`packageB/pages/live_course_info/live_course_info?courseid=${this.currentShareItem.id}`;
					path =
						`packageB/pages/live-info/live-infoplay?sharer_id=${app.globalData.userinfo.id}&liveuid=${this.currentShareItem.uid}&courseid=${this.currentShareItem.id}&lessonid=0&thumb=${this.currentShareItem.thumb}`;
					return {
						title: `${this.currentShareItem.name} - 情弦趣享`,
						path: `${path}&from=share`,
						imageUrl: this.currentShareItem.thumb || '/static/share-default.jpg',
						success: () => {
							//	this.logShare(this.currentShareItem.id);
							uni.showToast({
								title: '分享成功',
								icon: 'success'
							});
						},
						fail: () => uni.showToast({
							title: '分享取消',
							icon: 'none'
						})
					};
				}
				return {
					title: '${this.currentShareItem.name} - 情弦趣享',
					path: '/pages/my/my',
					imageUrl: '/static/share-default.jpg'
				};
			},
			onShareTimeline() {
				if (!this.currentShareItem) {
					return {
						title: '${this.currentShareItem.name} - 情弦趣享',
						query: '',
						imageUrl: '/static/share-default.jpg'
					};
				}

				let query = `courseid=${this.currentShareItem.id}`;
				return {
					title: this.currentShareItem.name,
					query: query,
					imageUrl: this.currentShareItem.thumb || '/static/share-default.jpg'
				};
			},
			logShare(courseId) {
				const userInfo = uni.getStorageSync('userinfo');
				if (!userInfo) return;

				uni.request({
					url: app.globalData.site_url + 'Course.ShareLog',
					method: 'POST',
					data: {
						course_id: courseId,
						user_id: userInfo.id,
						token: userInfo.token
					}
				});
			}
		}
	}
</script>

<style>
	@import url("/static/css/course_list.css");


	.page {
		padding-top: 80rpx;
		width: 100%;
		margin: 0 auto;
	}

	/deep/ .uni-navbar--fixed {
		width: 96%;
		height: 100rpx;
		padding-top: 30rpx;
		/* #ifdef MP-WEIXIN */
		padding-top: 80rpx;
		/* 你可以根据需要调整此值 */
		/* #endif */
		position: fixed;
		top: 80rpx;
		/* 修改top值, 移动导航栏的位置 */
		left: 6rpx;
		z-index: 999;
	}

	.swiper-box {
		margin-top: 20rpx;
	}

	.course-tab {
		margin-top: 25rpx;
		height: 45rpx;
		margin-bottom: 30rpx;
	}

	.s-all-wrap {
		position: relative;
	}

	.search-all-wrap {
		width: 90vw;
		margin: 30rpx auto 0 auto;
		height: 56rpx; // 高度可根据需要调整
		display: flex;
		align-items: center;
	}

	.search-wrap {
		width: 100%;
		height: 100%;
		border-radius: 28rpx;
		background-color: #f5f5f5;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
	}

	.search-wrap text {
		margin-right: 18rpx;
		color: #C7C7C7;
		font-size: 32rpx;
	}

	.search-wrap input {
		width: 90%;
		height: 100%;
		border: none;
		background: transparent;
		font-size: 28rpx;
		color: #333;
	}

	.new_gouwuche {
		position: relative;
		width: 80rpx;
		height: 80rpx;
	}

	.gouwunums {
		position: absolute;
		background-color: #DC2929;
		width: 26rpx;
		height: 26rpx;
		border-radius: 13rpx;
		margin-left: 40rpx;
		margin-top: 10rpx;
	}

	.gowucheimage {
		position: absolute;
		width: 70upx;
		height: 50upx;
		margin-top: 15rpx;
	}

	.carnums {
		width: 26rpx;
		height: 26rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 26rpx;
	}

	/*子标签样式*/
	.mark-type-wrap {
		height: 45rpx;
	}

	/* 子滑动标签 */
	.mark-sub-tab {
		margin-bottom: 35rpx;
		margin-left: 20rpx;
		width: 100%;
		overflow: hidden;
	}

	.mark-sub-item {
		width: 120rpx;
		height: 54rpx;
		line-height: 54rpx;
		margin-right: 20rpx;
		display: inline-block;
		border-radius: 30rpx;
		text-align: center;
		background-color: #F5F5F5;
		font-size: 20rpx;
	}

	.mark-sub-item:last-child {
		margin-right: 0;
	}

	.scroll-view_H {
		width: 100%;
		white-space: nowrap;
	}

	/* 大班课单独样式 */
	.liveinfo-wrap {
		/* padding-top: 2rpx; */
		min-height: 1500rpx;
		background-color: #FFFFFF;
	}

	.live-list {
		width: 90%;
		height: 200rpx;
		margin: 10rpx auto;
		border-radius: 8rpx;
		background-color: #efefef;
	}

	.xiangziwrap {
		position: absolute;
		left: calc(50% - 80px);
		top: calc(50% - 100px);
		width: 300rpx;
		height: 100rpx;

	}

	.xiangzi {
		margin-left: 100rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.xiangzi_txt {
		width: 100%;
		display: block;
		text-align: center;
		font-size: 18rpx;
		color: #C7C7C7;
	}

	/* 未登录提示 */
	.no-login-wrap {
		text-align: center;
		background-color: #fff;
		border-radius: 20px;
		width: 350rpx;
		height: 200rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.no-login-txt {
		display: block;
		font-size: 26rpx;
		color: #646464;
	}

	.no-login-btn {
		display: block;
		width: 180rpx;
		height: 60rpx;
		line-height: 60rpx;
		margin: 20rpx auto;
		font-size: 24rpx;
		color: #2C62EF;
		border: 2rpx solid #2C62EF;
		border-radius: 10rpx;
	}

	/deep/.uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	}

	.text-main {
		color: #FFFFFF !important;
		background: linear-gradient(to right, #3D98FF, #7A76FA);
	}

	/* 隐藏下划线 */
	.text-main::after {
		bottom: -9999rpx !important;
	}

	.courseclass-tab-item {
		width: 180rpx;
		height: 70rpx;
		line-height: 70rpx;
		margin-right: 28rpx;
		display: inline-block;
		border-radius: 35rpx;
		text-align: center;
		background-color: #F5F5F5;

	}

	/* 课程分类标签样式 */
	.courseclass-text-main {
		color: #2C62EF;
		font-weight: bold;
		position: relative;
	}

	.courseclass-text-main::after {
		content: "";
		width: 35rpx;
		height: 4rpx;
		background: linear-gradient(to top right, #3D98FF, #7A76FA);
		position: absolute;
		top: 50rpx;
		left: 55rpx;
		line-height: 0;
		display: inline-block;
	}

	.share-button,
	.watch-button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rpx 12rpx;
		background-color: #f5f5f5;
		border-radius: 20rpx;
		font-size: 24rpx;
		color: #666;
		transition: all 0.2s;
	}

	.share-button:active,
	.watch-button:active {
		background-color: #eee;
		transform: scale(0.95);
	}

	.share-button .iconfont,
	.watch-button .iconfont {
		margin-right: 6rpx;
		font-size: 24rpx;
	}

	.watch-button {
		margin-left: 15px;
	}

	/* 自定义导航栏 */
	.custom-navbar {
		width: 100%;
		height: 100rpx;
		background: url(../../static/images/mybg.jpg) no-repeat;

		display: flex;
		align-items: center;
		padding-left: 20rpx;
		padding-right: 20rpx;
		position: fixed;

		top: calc(0rpx + {
					{
					statusBarHeight
				}
			});
		/* 使用状态栏高度 */
		left: 0;
		z-index: 1000;
		/* 确保导航栏位于最上层 */
	}

	/* 返回按钮 */
	.back-btn {
		width: 50rpx;
		/* 设置按钮的宽度 */
		height: 50rpx;
		/* 设置按钮的高度 */
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20rpx;
	}

	/* 返回按钮图标 */
	.back-btn .iconfont {
		font-size: 30rpx;
		/* 设置箭头图标大小 */
		color: #ffffff;
		/* 设置图标颜色为白色 */
	}

	/* 标题 */
	.navbar-title {
		flex-grow: 1;
		text-align: center;
		font-size: 32rpx;
		color: #ffffff;
		/* 设置标题文字颜色为白色 */
		font-weight: bold;
	}

	.course-abs-wrap {
		margin-top: 140rpx;
	}
</style>