<template>
	<view class="page">
		<!-- 头部 -->
		<!-- 老师名字ID区域新改	 -->
		<div class="myHeader">
			<div class="my_1">
				<!-- <img src="static/images/5.jpg" class="tx"> -->
				<view class="title-wrap">
					<template v-if="userInfo.avatar">
						<image @click="editmeans(userInfo.id)" mode="aspectFill"
							:src="userInfo.avatar.length >0? userInfo.avatar:default_avatar"
							style="width: 120rpx; height: 120rpx;position: relative;top: 40rpx;" class="tx">
						</image>
					</template>
					<template v-else>
						<image :src="default_avatar" style="width: 120rpx; height: 120rpx;" class="tx">
						</image>
					</template>
				</view>
				<!-- <span>王晓理</span> -->
				<view class="name-id-wrap login">
					<view v-if="userInfo.id != undefined">
						<text>{{userInfo.user_nickname}}</text>
						<text class="id-wrap">ID:{{userInfo.id}}</text>
						<view class="guan-wrap" @click="attenteacher">
							<!-- <text class="guanzhu-title">关注讲师 {{follows}}</text>
			 <text class="guanzhu-num"> {{follows}}</text> -->
						</view>
					</view>
					<view v-else class="tx">
						<view @click="openLoginReg" class="name-id-wrap name-id-wrap-loginreg">
							<text>登录/注册</text>
						</view>
						<!-- <image @click="editmeans(userInfo.id)" class='right' src="../../static/mine_right.png"></image> -->
					</view>
				</view>


				<img @click="editmeans(userInfo.id)" class="more" src="../../static/mine_right.png">

			</div>

			<!-- 统计数据 -->
			<view class="stats">
				<view class="stat-item">
					<view class="stat-value">{{ stats.today }}</view>
					<view class="stat-label">今日</view>
				</view>
				<view class="stat-item">
					<view class="stat-value">{{ stats.month }}</view>
					<view class="stat-label">本月</view>
				</view>
				<view class="stat-item">
					<view class="stat-value">{{ stats.total }}</view>
					<view class="stat-label">累计</view>
				</view>
			</view>
			<!-- <div class="log">
				<div class="log-item " v-for="(item,index) in log" :key="index">
					<div class="log-count ">
						<text>{{item.count}}</text>
					</div>
					<div class="log-title ">
						<text>{{item.titel}}</text>
					</div>
				</div>
			</div> -->

			<!-- 体验按钮 -->
			<view class="experience" style="display: none;">
				<text>界定客源体验</text>
				<button class="exp-btn">立即体验</button>
			</view>
			<!-- <div class="experience">
				<text>界定客源体验</text>
				<text></text>
				<button>立即体验</button>
			</div> -->

		</div>
		<!-- 		<view class="p-3 border-bottom avatar-wrap"> -->
		<!-- 老师名字ID区域	 -->

		<!-- <view class="title-wrap">
				
				<template v-if="userInfo.avatar">
				<image mode="aspectFill" :src="userInfo.avatar.length >0? userInfo.avatar:default_avatar" style="width: 120rpx; height: 120rpx;position: relative;top: 40rpx;" class="rounded-circle title-avatar">
				</image>
				</template>
				<template v-else>
					<image :src="default_avatar" style="width: 120rpx; height: 120rpx;" class="rounded-circle title-avatar">
					</image>
				</template>
					
				<view v-if="userInfo.id != undefined" class="forteacher">
					<view class="name-id-wrap">
						<text>{{userInfo.user_nickname}}</text>
						<text class="id-wrap">ID:{{userInfo.id}}</text>
		                <view class="guan-wrap" @click="attenteacher">
		                	<text class="guanzhu-title">关注讲师 {{follows}}</text>
		                	<text class="guanzhu-num"> {{follows}}</text>
		                </view>
					</view>
					
					<image @click="editmeans(userInfo.id)" class='right' src="../../static/mine_right.png"></image>
					<view class="dier">
						<view v-if="isTeacherInfo == '1'" class="teacherhome" @click="showTeacherInfo">讲师主页</view>
					</view>
				</view>
				<view v-else class="forteacher">
					<view @click="openLoginReg" class="name-id-wrap name-id-wrap-loginreg">
						<text>登录/注册</text>
					</view>
					<image @click="editmeans(userInfo.id)" class='right' src="../../static/mine_right.png"></image>
				</view>
				
			</view> -->
		<!-- 		</view> -->

		<!-- 点击列表页 -->
		<!-- 功能入口 -->
		<view class="grid">
    <view
      v-for="(item, index) in menu"
      :key="index"
      class="grid-item"
      @click="onMenuClick(item)"
    >
      <image :src="item.icon" class="grid-icon" />
      <view class="grid-label">{{ item.label }}</view>
      <view v-if="item.badge" class="badge">{{ item.badge }}</view>
    </view>
  </view>
		<!-- <view class="mybox_3">
			<ul style="list-style-type:none">
				<li>
					<view @click="mykecheng"><img src="../../static/images/icon7.png">
						<p>分享内容</p>
					</view>
				</li>
				<li>
					<view @click="myrecord"><img src="../../static/images/icon4.png">
						<p>查看记录</p>
					</view>
				</li>
				<li>
					<view @click="yijianfan"><img src="../../static/images/icon1.png">
						<p>意见反馈</p>
					</view>
				</li>
				<li>
					<view @click="lianxiwe"><img src="../../static/images/icon2.png">
						<p>关于我们</p>
					</view>
				</li>
				<li>
					<view @click="shezhi"><img src="../../static/images/icon5.png">
						<p>设置</p>
					</view>
				</li>
			</ul>
		</view> -->
		<!-- 广告位 -->
		<view @click="guanggao" class="index-banner-wrap2" style="display: none;">

			<!--	<image class="index-banner-img2"  src="../../static/images/huodong.png" mode="aspectFill"></image>-->

		</view>
		<view class="animated fast fadeIn userinfo-list" style="display: none;">
			<view class="p-3">
				<view v-for="(item,index) in list" class="my-item" @click="mylist(item.id,item.href)">
					<image class="userinfo-icon-img" :src="item.thumb" mode="aspectFill"></image>
					<view class="userinfo-title-txt">{{item.name}}</view>
					<view class="content" v-if="item.id == 10">{{integral}}</view>
					<view class="content" v-if="item.id == 11 && praisenums > 0">{{praisenums + '次'}}</view>
					<uni-icons :size="20" class="uni-icon-wrapper" color="#bbb" type="arrowright" />
					<view class="itemline"></view>
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	import uniIcons from '@/components/uni-ui/uni-icons/uni-icons.vue';

	const app = getApp();

	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				userInfo: {},
				isTeacherInfo: '',
				stats: {
					today: 0,
					month: 0,
					total: 0
				},
				menu: [{
						label: '分享内容',
						icon: '../../static/images/icon7.png',
						url: '../course/course'
					},
					{
						label: '查看记录',
						icon: '../../static/images/icon4.png',
						url: '../hasbuy/hasbuy'
					},
					{
						label: '意见反馈',
						icon: '../../static/images/icon1.png',
						url: '../yijian-fankui/yijian-fankui'
					},
					{
						label: '关于我们',
						icon: '../../static/images/icon2.png',
						url: '../lianxi-we/lianxi-we'
					},
					{
						label: '设置',
						icon: '../../static/images/icon5.png',
						url: '../setting/setting'
					}
				],
				list: [],
				favnums: 0,
				follows: 0,
				examnums: 0,
				wrongnums: 0,
				praisenums: 0,
				integral: 0,
				kongkong: false,
				default_avatar: '../../static/images/default_avatar.png', //默认头像	
			}
		},

		onLoad() {
		//	if (app.globalData.userinfo == '') {
		//		uni.navigateTo({
		//			url: '../login/login'
		//		})
		//		return;
		//	}
			this.getinfo();
		},
		onShow() {
			this.getinfo();
		},
		computed: {
			getAvatar() {
				if (this.userInfo.length > 0 && this.userInfo.avatar != '') {
					return this.userInfo.avatar;
				} else {
					return this.default_avatar;
				}

			}
		},
		methods: {
			// 功能
			onMenuClick(item) {
				if (item.url) {
					uni.navigateTo({
						url: item.url
					});
				} else {
					uni.showToast({
						title: '功能开发中',
						icon: 'none'
					});
				}
			},
			openLoginReg() {
				uni.navigateTo({
					url: '../login/login'
				})
				return;
			},
			// myrecord() {
			// 	uni.navigateTo({
			// 		url: '../hasbuy/hasbuy'
			// 	})
			// 	return;
			// },
			// mykecheng() {
			// 	uni.navigateTo({
			// 		url: '../course/course'
			// 	})
			// 	return;
			// },

			// yijianfan() {
			// 	uni.navigateTo({
			// 		url: '../yijian-fankui/yijian-fankui'
			// 	})
			// 	return;
			// },
			guanggao() {
				uni.navigateTo({
					url: '../news/news',
				});
			},
			lian() {
				uni.navigateTo({
					url: '../login/xieyi?type=93',
				});
			},
			// lianxiwe() {
			// 	uni.navigateTo({
			// 		url: '../lianxi-we/lianxi-we'
			// 	})
			// 	return;
			// },
			// shezhi() {
			// 	uni.navigateTo({
			// 		url: '../setting/setting'
			// 	})
			// 	return;
			// },
			xinwen() {
				uni.navigateTo({
					url: '../news/news'
				})
				return;
			},
			xiaoxi() {
				uni.navigateTo({
					url: '../setting/setting'
				})
				return;
			},
			gouwuche() {
				if (app.globalData.userinfo == '') {
					uni.navigateTo({
						url: '../login/login'
					})
					return;
				}

				uni.navigateTo({
					url: '../shop-car/shop-car',
				});
			},
			getinfo() {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'User.GetBaseInfoUniapp',
					method: 'GET',
					data: {
						'uid': gData.userinfo.id,
						'token': gData.userinfo.token
					},
					success: res => {

						if (parseInt(res.data.data.code) !== 0) {
							return;
						}

						this.favnums = res.data.data.info[0].favnums;
						this.follows = res.data.data.info[0].follows;
						this.examnums = parseInt(res.data.data.info[0].examnums);

						this.wrongnums = res.data.data.info[0].wrongnums;
						this.praisenums = res.data.data.info[0].praisenums;
						this.integral = res.data.data.info[0].integral;
						this.list = res.data.data.info[0].list;
						this.userInfo = res.data.data.info[0];

						this.stats.month = res.data.data.info[0].monthCount;
						this.stats.today  = res.data.data.info[0].todayCount;
						this.stats.total = res.data.data.info[0].allCount;
						if (res.data.data.info[0].type == '1') {
							//讲师
							this.isTeacherInfo = '1'
						}

					}
				});
			},
			mylist(ID, href) {
				var url = href + '&uid=' + app.globalData.userinfo.id + '&token=' + app.globalData.userinfo.token;
				if (ID == 1) {
					//已购买
					uni.navigateTo({
						url: '../hasbuy/hasbuy'
					});
				} else if (ID == 3) {
					//意见反馈
					uni.navigateTo({
						url: '../yijian-fankui/yijian-fankui',
					});
				} else if (ID == 4) {
					var urls = app.globalData.site_h5url + 'appapi/page/detail?id=1&lang=zh-cn';
					console.log(urls);
					//关于我们
					uni.navigateTo({

						url: '../about/about?url=' + encodeURIComponent(JSON.stringify(urls)) + '&title=' + '关于我们',
					});
				} else if (ID == 6) {
					//设置
					uni.navigateTo({
						url: '../setting/setting',
					});
				}
			},
			attenteacher() {
				uni.navigateTo({
					url: '../attenteacher/attenteacher',
				});
			},

			// 编辑资料
			editmeans(uid) {
				uni.navigateTo({
					url: '../edit_user/edit_user?id=' + uid + '&avatar=' + this.userInfo.avatar +
						'&user_nickname=' + this.userInfo.user_nickname,
				});
			},
			//讲师主页
			showTeacherInfo(touid) {
				//跳转教师详情页并传入基本信息
				uni.navigateTo({
					url: '../teacherinfo/teacherinfo?touid=' + app.globalData.userinfo.id,
				});

			},
			wrong() {
				uni.navigateTo({
					url: '../../packageA/pages/wrongbooks/wrongbooks',
				});
			}
		}
	}
</script>

<style>
	.index-banner-wrap2 {
		overflow: overlay;
		transform: translateY(0);
		/* margin-top: 20rpx; */
		height: 230rpx;
		width: 100%;

	}

	.index-banner-wrap2 .index-banner-img2 {

		height: 100%;
		/* width: 100%; */
		display: flex;
		margin: auto;

	}

	.myHeader {
		width: 100%;
		max-width: 512px;
		background: url(../../static/images/mybg.jpg) no-repeat;
		background-size: 100% 100%
	}

	.myHeader .my_1 {
		display: flex;
		padding: 40px 0 30px;
		width: 100%;
		height: 76px;
		line-height: 76px;
		color: #fff;
	}

	.myHeader .my_1 .tx {
		float: left;
		display: table;
		margin-right: 10px;
		/* 	width: 70px; */
		height: 70px;
		/* border: 3px solid #fff; */
		border-radius: 100%;
		margin-left: 20px;
	}

	.myHeader .my_1 span {
		flex: 1;
		display: block;
		font-size: 16px;
		letter-spacing: 1px;
	}

	.myHeader .my_1 .more {
		display: block;
		float: right;
		margin-right: 20px;
		height: 24px;
		margin-top: 26px
	}

	.myHeader .my_2 {
		padding: 0 35px 20px;
		overflow: hidden
	}

	/* 	.myHeader .my_2 a {
		border: 1px solid #fff;
		border-radius: 25px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		color: #fff;
		letter-spacing: 1px;
		font-size: 14px;
		display: block;
		width: 40%
	} */
	.myHeader .my_2 .L {
		float: left;
		border: 1px solid #fff;
		border-radius: 25px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		color: #fff;
		letter-spacing: 1px;
		font-size: 14px;
		display: block;
		width: 40%
	}

	.myHeader .my_2 .R {
		float: right;
		border: 1px solid #fff;
		border-radius: 25px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		color: #fff;
		letter-spacing: 1px;
		font-size: 14px;
		display: block;
		width: 40%
	}

	/* 功能 */
	/* .mybox_3 {
		overflow: hidden;
		padding: 10px 15px;
		display: flex;
		flex-wrap: wrap;
	}

	.mybox_3 ul {
		box-shadow: #eee 0px 0px 10px 2px;
		border-radius: 10px;
		margin-bottom: 10px;
		width: 100%;
		padding: 10px 0;
		overflow: hidden
		dis
		
	}

	.mybox_3 ul li {
		float: left;
		width: 25%;
		padding: 5px 0
	}

	.mybox_3 li img{
		display: block;
		width: 108rpx;
		margin: 0 auto;
		height: 108rpx;
	}

	.mybox_3 ul li p {
		text-align: center;
		letter-spacing: 1px;
		line-height: 26px
	} */

	.grid {
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		margin: 20rpx;
		border-radius: 16rpx;
		padding: 10rpx 0;
	}

	.grid-item {
		width: 33.33%;
		text-align: center;
		padding: 36rpx 0 24rpx 0;
		position: relative;
		transition: box-shadow 0.2s;
	}

	.grid-item:active {
		box-shadow: 0 4rpx 16rpx #e0e0e0;
	}

	.grid-icon-bg {
		width: 72rpx;
		height: 72rpx;
		background: linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 12rpx auto;
		box-shadow: 0 2rpx 8rpx #f5c16c;
	}

	.grid-icon {
		width: 40px;
		height: 40px;
	}

	.grid-label {
		font-size: 26rpx;
		color: #333;
		margin-top: 6rpx;
		font-weight: 500;
	}

	/* 功能 */

	.wechat {
		width: 100%;
		height: 120rpx;
		/* background-image: url('https://edu-qiniu.sdwanyue.com/knowledge_myheader.png'); */
	}

	.content {
		position: absolute;
		right: 100rpx;
	}

	.page {
		width: 100%;
		height: 100%;
	}

	.dier {
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 40rpx;
		margin-top: 40rpx;
	}

	.right {
		margin-left: 70rpx;
		width: 40rpx;
		height: 40rpx;
		margin-top: 40rpx;
	}

	.forteacher {
		display: flex;
		width: 75%;
		flex-direction: row;
		align-items: center;
	}

	.teacherhome {
		/* 	position: absolute;
		right: 80rpx; */
		text-align: center;
		margin-top: 35rpx;
		width: 100rpx;
		height: 30rpx;
		padding-bottom: 5rpx;
		color: #FFFFFF;
		font-size: 20rpx;
		border: 2rpx solid #FFFFFF;
		border-radius: 20rpx;
	}

	.userinfo-list {
		/* position: absolute; */
		margin-top: -30rpx;
	}

	.title-wrap {
		display: flex;
		/* align-items: center; */
		width: 100%;
		height: 61%;
		margin: 0 auto;
		font-size: medium;
		font-weight: bold;
	}

	.avatar-wrap {
		height: 200rpx;
		padding-top: 80rpx;
		background-image: url('https://edu-qiniu.sdwanyue.com/knowledge_myheader.png');
		/* #ifdef MP-WEIXIN */
		height: 200rpx;
		background-size: 100% 100%;
		/* #endif */
	}

	.title-avatar {
		float: left;
		margin-left: 20rpx;
	}

	.name-id-wrap {
		width: 100%;
		height: 100%;
		float: left;
		position: relative;
		/* top: 10rpx; */
		color: #FFFFFF;
		margin-left: 10rpx;
		font-size: medium;
	}

	.name-id-wrap text:first-child {
		display: block;
		/* font-size: medium; */
		font-weight: bold;
		margin-top: 10rpx;
	}

	.name-id-wrap text:nth-child(2) {
		display: block;
		margin-top: 10rpx;
		font-weight: bold;

	}

	.name-id-wrap text:nth-child(3) {
		position: absolute;
		right: 0rpx;
		top: 30%;
		color: #FFFFFF;
		font-weight: bold;
	}


	/* 登录注册按钮 */
	.name-id-wrap-loginreg {
		padding-left: 10rpx;
		/* 	margin-top: 20px; */
		width: 200rpx;
	}

	.name-id-wrap.login {
		width: 200%;
		margin-right: 100rpx;
		margin-top: 30rpx;
	}

	.id-wrap {
		font-size: small;
	}

	.guanzhu-title {
		font-size: small;
	}

	/* 关注教师 */
	.name-id-wrap.guan-wrap {
		width: 100%;
		height: 0rpx;
		float: left;
		margin-top: 150rpx;
		color: #FFFFFF;
		position: absolute;
		margin-left: 20rpx;


	}

	.name-id-wrap.guanzhu-title {
		font-size: small;
	}

	/* .name-id-wrap.guanzhu-num {
		font-size: medium;
		padding-left: 20rpx;
		padding-top: 2rpx;
	} */


	.teacher-info-btn {
		display: inline-block;
		width: 130rpx;
		height: 36rpx;
		line-height: 36rpx;
		text-align: center;
		background-color: transparent;
		color: #FFFFFF;
		border: 2rpx solid #FFFFFF;
		border-radius: 40rpx 40rpx;
		font-size: 20rpx;
	}

	/****** 统计区域******/
	/* .log {
		margin-top: 20rpx;
		background: linear-gradient(to right, #555046, #675F56);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		height: 150rpx;
		width: 90%;
		margin: 0 auto;
		top: -60rpx;
		border-radius: 18rpx;
		border: 2rpx solid #DEE2E6;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
	}

	.log-item {
		height: 70%;
		width: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 10rpx;
	}

	.log-count {
		text-align: center;
	}

	.tongji-img {
		width: 52rpx;
		height: 50rpx;
		margin-left: 60rpx;
	}
	 */
	.stats {
		display: flex;
		justify-content: space-around;
		background: #fff;
		margin: 0 20rpx;
		border-radius: 16rpx;
		box-shadow: 0 2rpx 8rpx #eee;
		margin-top: -30rpx;
		z-index: 1;
		position: relative;
	}

	.stat-item {
		text-align: center;
		padding: 20rpx 0;
	}

	.stat-value {
		font-size: 36rpx;
		font-weight: bold;
		color: #222;
	}

	.stat-label {
		font-size: 24rpx;
		color: #888;
	}

	/* 统计数据结束 */

	/* 客源体验 */
	/* .experience {
		margin-top: 20rpx;
		background: linear-gradient(to right, #555046, #675F56);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		height: 150rpx;
		width: 90%;
		margin: 0 auto;
		top: -60rpx;
		border-radius: 18rpx;
		border: 2rpx solid #DEE2E6;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #FFFFFF;
	}

	.experience text {
		padding-left: 10rpx;
		font-size: 40rpx;
	}

	.experience button {
		margin: 0;
		background: linear-gradient(to right, #B88752, #B88752);
	} */

	.experience {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		margin: 20rpx;
		padding: 20rpx;
		border-radius: 16rpx;
	}

	.exp-btn {
		background: #ff9800;
		color: #fff;
		border-radius: 24rpx;
		padding: 10rpx 30rpx;
		font-size: 28rpx;
	}

	/* 体验结束 */

	/* 个人中心下半部分文字标题 */
	.userinfo-icon-img {
		width: 40rpx;
		height: 40rpx;
		display: inline-block;
	}

	.user-bottom-icon-left {
		display: inline-block;
		width: 7%;
	}

	.user-bottom-title {
		display: inline-block;
		width: 18%;
	}

	.user-bottom-icon {
		display: inline-block;
		text-align: right;
		width: 69%;
	}

	.my-item {
		color: #323232;
		padding-left: 30rpx;
		display: flex;
		flex-direction: row;
		flex: 1;
		align-items: center;
		height: 104rpx;
		font-size: medium;

	}

	.itemline {
		position: absolute;
		/* width: 100%; */
		right: 70rpx;
		left: 100rpx;
		height: 2rpx;
		margin-top: 50rpx;
		background-color: #F5F5F5
	}

	.userinfo-title-txt {
		width: 82%;
		padding-left: 20rpx;

		font-size: medium;
	}
</style>