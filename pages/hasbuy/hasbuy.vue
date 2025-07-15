<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<view class="top-nav">
			<view class="back-btn" @click="goBack"></view>
			<text class="page-title">查看记录</text>
			<view class="capsule"></view>
		</view>

		<!-- 筛选栏（搜索 + 下拉） -->
		<view class="filter-bar">
			<view class="filter-select">
				<text>全部</text>
				<text class="separator">|</text>
				<text>全部</text>
				<text class="iconfont icon-arrow"></text>
			</view>
			<view class="search-icon" @click="openSearch">
				<text class="iconfont icon-search"></text>
			</view>
		</view>

		<!-- 时间标签栏 -->
		<view class="time-tabs">
			<view class="tab-item" :class="{ active: timeFilter === '3days' }" @click="filterTime('3days')">3天</view>
			<view class="tab-item" :class="{ active: timeFilter === '7days' }" @click="filterTime('7days')">7天</view>
			<view class="tab-item" :class="{ active: timeFilter === '30days' }" @click="filterTime('30days')">30天</view>
			<view class="tab-item" :class="{ active: timeFilter === 'total' }" @click="filterTime('total')">累计</view>
		</view>

		<!-- 排序切换栏 -->
		<view class="sort-bar">
			<view class="sort-item" @click="toggleSort('time')">
				按时间
				<text class="iconfont icon-sort"></text>
			</view>
			<view class="sort-item" @click="toggleSort('intent')">
				按意向
				<text class="iconfont icon-sort"></text>
			</view>
		</view>

		<!-- 记录列表 -->
		<scroll-view class="record-list" scroll-y>
			<view class="record-item" v-for="(item, index) in course_info" :key="index">
				<!-- 内容容器：与头像左侧对齐 -->
				<view class="content-container">
					<!-- 头像容器：固定宽度 -->
					<view class="top-row">
						<!-- 左侧头像 -->
						<view class="avatar-wrap">
							<image class="avatar" :src="item.customer_avatar" />
						</view>

						<!-- 右侧内容：名字 + 意向标签 -->
						<view class="name-intent">
							<text class="name">{{ item.customer_nickname }}</text>
							<view class="intent-tag" :class="item.intentClass">
								{{ item.intentText }}
							</view>
						</view>
					</view>

					<!-- 标题 + 子标题：与头像左侧对齐 -->
					<view class="title-row">
						<text class="main-title">{{ item.name }}</text>
						<text class="sub-title">{{ item.add_time }}</text>
					</view>

					<!-- 统计信息：与头像左侧对齐 -->
					<view class="stats">
						<text class="view-time">查看时间：{{ item.pay_time }}</text>
						<text class="watch-time">本次观看时长：{{ item.percentWatched }}%</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	const app = getApp();

	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				course_info: [],
				course_cname: '',
				kongkong: true,
				timeFilter: '3days', // 默认显示3天数据
				sortType: 'time' // 默认按时间排序
			}
		},
		onLoad(option) {
			let gData = app.globalData;
			this.course_cname = option.course_cname;

			uni.setNavigationBarTitle({
				title: option.course_cname
			});

			this.fetchCourseInfo(); // 初始拉取
		},
		methods: {
			fetchCourseInfo() {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Course.GetMyBuy',
					method: 'GET',
					data: {
						uid: gData.userinfo.id,
						token: gData.userinfo.token,
						time_filter: this.timeFilter, // 添加时间参数
						sort_by: this.sortType // 添加排序参数
					},
					success: res => {
						let data = res.data.data;
						if (data.code == 0 && data.info.length > 0) {
							this.course_info = data.info;
							this.kongkong = false;
						} else {
							this.course_info = [];
							this.kongkong = true;
						}
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误',
						});
					},
				});
			},

			filterTime(type) {
				this.timeFilter = type;
				this.fetchCourseInfo(); // 切换时间后重新拉取
			},

			toggleSort(type) {
				this.sortType = type;
				this.fetchCourseInfo(); // 切换排序后重新拉取

			},

			goBack() {
				uni.navigateTo({
					url: '../my/my'
				})
			},

		}
	}
</script>

<style scoped>
	/* 全局样式 */
	page {
		background-color: #f5f5f5;
	}

	.container {
		width: 100%;
		min-height: 100vh;
	}

	/* 顶部导航 */
	.top-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #222;
		padding: 16rpx 24rpx;
	}

	.content-container {
		width: 95%;
	}

	.back-btn {
		color: #fff;
		font-size: 36rpx;
		padding: 20rpx;
		/* 增加点击区域 */
	}

	.back-btn:active {
		opacity: 0.7;
	}

	.page-title {
		font-size: 32rpx;
		color: #fff;
	}

	.capsule {
		width: 120rpx;
		height: 40rpx;
		background-color: #444;
		border-radius: 20rpx;
	}

	/* 筛选栏 */
	.filter-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #333;
		padding: 12rpx 24rpx;
	}

	.filter-select {
		color: #fff;
		font-size: 28rpx;
	}

	.separator {
		margin: 0 8rpx;
		color: #999;
	}

	.search-icon {
		color: #fff;
		font-size: 32rpx;
	}

	/* 时间标签 */
	.time-tabs {
		display: flex;
		background-color: #fff;
		border-bottom: 1px solid #eee;
	}

	.tab-item {
		flex: 1;
		text-align: center;
		font-size: 28rpx;
		color: #333;
		padding: 16rpx 0;
		border-right: 1px solid #eee;
	}

	.tab-item:last-child {
		border-right: none;
	}

	.tab-item.active {
		background-color: #f3b752;
		color: #fff;
	}

	.avatar-wrap {}

	.avatar {
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		object-fit: cover;
	}

	.name-intent {
		display: flex;
		flex-direction: row;
		/* 水平排列 */
		justify-content: flex-start;
		/* 让名称左对齐 */
		align-items: center;
		/* 垂直居中 */
		width: 100%;
		/* 确保容器的宽度足够 */
	}

	.name {
		font-size: 30rpx;
		color: #333;
		font-weight: bold;
		text-align: left;
		/* 确保标题靠左对齐 */
		line-height: 40rpx;
		margin-right: 12rpx;
		/* 为了给意向标签留点空间 */
	}

	.intent-tag {
		padding: 6rpx 14rpx;
		border-radius: 6rpx;
		font-size: 24rpx;
		background-color: #f3b752;
		color: #fff;
		margin-top: 6rpx;
		width: fit-content;
		margin-left: auto;
		/* 自动将意向标签推到右侧 */
	}

	/* 排序栏 */
	.sort-bar {
		display: flex;
		background-color: #fff;
		border-bottom: 1px solid #eee;
	}

	.sort-item {
		flex: 1;
		text-align: center;
		font-size: 28rpx;
		color: #333;
		padding: 16rpx 0;
		border-right: 1px solid #eee;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sort-item:last-child {
		border-right: none;
	}

	.icon-sort {
		margin-left: 4rpx;
		font-size: 24rpx;
	}

	/* 记录列表 */
	.record-list {
		padding: 16rpx 24rpx;
	}

	.record-item {
		display: flex;
		align-items: flex-start;
		background-color: #fff;
		border-radius: 8rpx;
		padding: 20rpx;
		margin-bottom: 20rpx;
		box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.03);
		position: relative;
	}

	/* 头像 */
	.avatar {
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		object-fit: cover;
		position: relative;
		/* 为绝对定位提供参考 */
		z-index: 10;
	}

	/* 内容容器 */
	.content-wrap {
		flex: 1;
		padding-left: 0;
		position: relative;
	}

	/* 名称+意向行 */
	.top-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8rpx;
		padding-left: 0;
	}

	.name {
		font-size: 30rpx;
		color: #333;
		font-weight: bold;
		line-height: 40rpx;
	}

	.intent-tag {
		padding: 6rpx 14rpx;
		border-radius: 6rpx;
		font-size: 24rpx;
		background-color: #f3b752;
		color: #fff;
	}

	.title-row {
		display: flex;
		justify-content: space-between;
		/* 使标题和子标题左右分布 */
		align-items: center;
		/* 确保它们垂直居中 */
		margin-top: 8rpx;
		/* 为标题和子标题添加间距 */
	}

	.main-title {
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		line-height: 36rpx;
	}

	.sub-title {
		font-size: 26rpx;
		color: #999;
		background-color: #f5f5f5;
		padding: 4rpx 12rpx;
		border-radius: 6rpx;
		margin-top: 4rpx;
	}


	/* 统计信息：查看时间和观看时长在同一行 */
	.stats {
		display: flex;
		justify-content: space-between;
		/* 关键 */
		align-items: center;
		padding: 0 4rpx;
		/* 可选，留点内边距 */
	}

	.view-time,
	.watch-time {
		font-size: 24rpx;
		color: #666;
	}

	/* 强烈意向 - 橙色 */
	.strong {
		background-color: #f56c6c;
	}

	/* 一般意向 - 蓝色 */
	.general {
		background-color: #409EFF;
	}

	/* 无意向 - 灰色 */
	.none {
		background-color: #909399;
	}
</style>