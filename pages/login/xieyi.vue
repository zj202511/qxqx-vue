<template>
  <view class="container">
    <!-- 返回按钮行（包含返回按钮和标题） -->
    <view class="header-bar">
        <text class="page-title">用户服务协议</text>
    </view>
    
    <!-- 原有内容区域 -->
    <view class="lianxi-all-wrap">
      <!-- 用空格实体实现第二行空两格效果 -->
      <text class="lianxi-content">
         欢迎您使用 [情弦趣享] 平台（以下简称 “本平台”）提供的服务。本协议是您与本平台之间关于使用本平台服务所订立的协议。请您在使用本平台服务前仔细阅读本协议的全部内容，如有疑问，可向本平台咨询。您一旦使用本平台服务，即视为您已充分理解并同意本协议的全部条款。
        一、服务内容
        本平台是专注于优质讲座视频分享的知识传播平台，为用户提供各类讲座视频的浏览、观看等服务。
        本平台的服务无需用户下载客户端，可在微信内一键开启使用。
        本平台保留对服务内容进行调整、更新的权利，如有重大变更，将通过平台公告等方式通知用户。
        二、用户权利与义务
        用户权利
        有权在本平台上浏览、观看各类讲座视频。
        有权对本平台的服务提出意见和建议。
        在遵守本协议及相关法律法规的前提下，享有本平台提供的其他相关权利。
        用户义务
        应当遵守国家法律法规及本协议的各项规定，不得利用本平台从事任何违法违规活动。
        不得侵犯本平台及其他用户的合法权益，包括但不限于知识产权、名誉权等。
        应当妥善保管自己的账号信息（如有），对通过自己账号实施的行为负责。
        不得对本平台的服务进行任何形式的破坏、干扰或滥用。
        三、知识产权
        本平台内的所有讲座视频、文字、图片、音频等内容的知识产权均归本平台或相关权利人所有。
        未经本平台或相关权利人书面许可，用户不得对本平台内的任何内容进行复制、传播、改编、演绎等任何形式的使用。
        用户在本平台上发布的合法内容，其知识产权归用户所有，但用户授予本平台免费、非独家、可转授权的使用权，用于本平台的运营和推广等相关活动。
        四、免责声明
        本平台仅为讲座视频的分享平台，对视频内容的真实性、准确性、合法性不承担保证责任。用户因依赖本平台的内容而产生的任何损失，本平台不承担责任。
        由于不可抗力、网络故障、第三方服务异常等非本平台可控因素导致用户无法正常使用本平台服务的，本平台不承担责任，但将尽力协助解决问题。
        用户因违反本协议或相关法律法规而产生的任何损失，由用户自行承担，如给本平台造成损失的，用户应予以赔偿。
        五、协议的变更与解除
        本平台有权根据业务发展和法律法规的变化对本协议进行修改，修改后的协议将在本平台公布，公布后即对用户产生约束力。
        如用户不同意本协议的修改，可停止使用本平台服务；如继续使用，视为同意修改后的协议。
        如用户严重违反本协议或相关法律法规，本平台有权随时终止对该用户提供服务，并保留追究其法律责任的权利。
        六、法律适用与争议解决
        本协议的订立、效力、解释、履行及争议解决均适用中华人民共和国法律。
        因本协议引起的或与本协议有关的任何争议，双方应首先通过友好协商解决；协商不成的，任何一方均有权向本平台所在地有管辖权的人民法院提起诉讼。
        七、其他
        本协议构成双方对本协议事项的完整约定，取代双方此前就此达成的任何口头或书面协议。
        如本协议中的任何条款被认定为无效或不可执行，不影响其他条款的效力。
        本平台的联系方式：QQ：330064646；邮箱：330064646@qq.com。如有任何问题，可通过上述方式与我们联系。
        本协议自发布之日起生效。

		
      </text>
	  
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    background-color: #FFFFFF;
  }
  
  /* 顶部导航栏样式 */
  .header-bar {
    display: flex;
    align-items: center;
    height: 120rpx;
    padding: 0 4%;
    border-bottom: 2rpx solid #F5F5F5;
    background-color: #FAFAFA;
  }
  
  .back-btn {
    width: 60rpx;
    height: 60rpx;
    font-size: 36rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #F0F0F0;
    color: #333333;
  }
  
  .page-title {
    flex: 1;
    text-align: center;
    font-size: 40rpx;
    font-weight: bold;
    color: #232323;
    margin-right: 60rpx; /* 抵消返回按钮宽度，使标题居中 */
  }
  
  /* 原有内容区域样式 */
  .lianxi-all-wrap {
    width: 92%;
    margin: 0 auto;
    padding: 30rpx 0;
    border-top: 2rpx solid #F5F5F5;
    box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.03) inset;
  }
  
  .lianxi-title {
    font-size: 34rpx;
    font-weight: bold;
    color: #2C3E50;
    line-height: 1.8;
    letter-spacing: 1rpx;
  }
  
  .lianxi-content {
    font-size: 26rpx;
    color: #555555;
    line-height: 2; /* 加大行高，让换行后空两格更明显 */
    letter-spacing: 0.5rpx;
    text-align: justify;

  }

  .lianxi-all-wrap:active {
    background-color: #FAFAFA;
    border-radius: 12rpx;
    transition: background-color 0.3s ease;
  }
   .contact-info {
      display: block;
      margin-top: 10rpx; /* 与上文保持间距 */
      /* 开头空两格，与正文格式统一 */
      text-indent: 72rpx; 
    }
</style>