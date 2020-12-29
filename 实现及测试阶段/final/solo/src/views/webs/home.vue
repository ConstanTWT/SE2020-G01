<template>


<div>
  
<div class="loading-wrapper" v-show="showLoading">
  <Loading></Loading>
</div>
<div class="login-wrapper" v-show="!showLoading">
<!-- 背景 -->

  <div class="back">
    <img :src="imgUrl" alt="" width="100%" height="100%">
  </div>
  <div class="logo1">
    GAMEPLAYER.COM
  </div>

<div class="Main">
 <el-row>
  <!-- 界面资讯 -->
<div class="main2">
  <!-- 导航条 -->
    <el-row :gutter="20">
  <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">新闻资讯</el-menu-item>
  <el-submenu index="2">
    <template slot="title">游戏专区</template>
    <el-menu-item index="2-1">策略</el-menu-item>
    <el-menu-item index="2-2">冒险</el-menu-item>
    <el-menu-item index="2-3">动作</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">游戏动态</template>
      <el-menu-item index="2-4-1">售价变动</el-menu-item>
      <el-menu-item index="2-4-2">厂家官宣</el-menu-item>
      <el-menu-item index="2-4-3">测试活动</el-menu-item>
    </el-submenu>
    
  </el-submenu>
  
  <el-menu-item index="4"><a href="https://www.gamersky.com/handbook/" target="_blank">攻略秘籍</a></el-menu-item>
  <el-menu-item index="3" v-show="flag"  @click="routerto3()">个人收藏</el-menu-item>
  
<el-menu-item index="3" @click="routerto2()">
  论坛</el-menu-item>
<el-menu-item index="3" @click="routerto()">管理员界面</el-menu-item>

 <div class="login">
    <el-popover
    placement="bottom"
    title="您已成功登陆，确认登陆情况"
    width="250"
    trigger="manual"
    v-model="visible">
    
    <el-button  slot="reference" type="success" icon="el-icon-share" @click="login" >
  
   
     <div v-show="!flag">
        登陆
     </div>
     <div v-show="flag">
        L-L
     </div>
   </el-button>
   </el-popover>
 </div>
 

</el-menu>
</el-row>
<div >
<!-- 标签页 -->
<el-row :gutter="20">
  <el-col :span="18" :offset="2"><div class="grid-content bg-purple">
  <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> 热门游戏</span>
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>

  </el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-view"></i> 动作</span>
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>
  </el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-view"></i> 冒险</span>
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>
  </el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-view"></i> 策略</span>
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>
  </el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-view"></i> 沙盒</span>
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>
  </el-tab-pane>
</el-tabs>
</div></el-col>
</el-row>
</div>

<!-- 轮播图 -->
<div class="main1">
<el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>


<el-row :gutter="20">
  <!-- offset表示偏移栏数目 -->
 <el-col :span="12" :offset="6">
<div class="grid-content bg-purple">
<template>
  <div class="block">
   
    <el-carousel height="300px">
      <el-carousel-item 
      v-for="(item,index) in abc_img"  :key="index">
<div class="margin">
<img :src="item.url" class="lun_img" >
 </div>
       
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
 </div>
 </el-col>
<!-- 资讯 -->
<el-col :span="6">
<div class="grid-content bg-purple">

     <div class="same">   
      <div class="word">
     IGN
     
      </div>
      <div class="test">
      IGN（Imagine Games Network）是一间多媒体和评论网站，主要对象为视频游戏，现已发展成为全球规模最大的游戏娱乐媒体。母公司是 IGN Entertainment（GameSpy、Rotten Tomatoes、AskMen持有者）。 IGN的主网站包含数个特别网页或“频道”，每一个都在IGN有分区。游戏有关的频道有：电脑游戏、任天堂Switch、Wii、Wii U、任天堂3DS、Xbox 360、PS5、PS4、Xbox one、PSP、PSV、PSN、Xbox Live、移动电话、Retro、iPhone。IGN频道还包含：电影、音乐、工具、科技、运动、电视等等。
      </div>  
      </div>
</div>
</el-col>

<el-col :span="20" :offset="5">
   <div class="grid-content bg-purple">
<el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="6"><div class="grid-content bg-purple">
  
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">
  
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  
  </div></el-col>
</el-row>
   </div> 
</el-col>

</el-row>
</div>



</div>

</el-row>  

</div>
</div>


</div>
     

</template>


<script>
import Loading from '@/components/loading/Loading.vue'




export default {
    inject:['reload'],
    name: 'Home',
    components:{
     Loading
       
    },
    data() {
      

return {
  
  activeName: 'second',
      abc_img:[
        {url:require('../../assets/images/lun-1.jpeg')},
        {url:require('../../assets/images/lun-2.jpg')},
        {url:require('../../assets/images/lun-3.jpeg')},
        {url:require('../../assets/images/lun-4.jpeg')}
      ], 
      showLoading: true,
      imgUrl: require('../../assets/images/bg-img-8.jpg'),
      ruleForm: {
        name: '',
        pass: ''
      },
       activeIndex: '1',
        activeIndex2: '1',
        flag:false,
        visible:false,
        i:1,
       
    }
    },
    mounted () {
    let bgImg = new Image()
    bgImg.src = this.imgUrl
    bgImg.onerror = () => {
      console.log('img onerror')
    }
    bgImg.onload = () => { // 图片加载成功后 去除 loading
      this.showLoading = false
      if(window.location.href.split('?')[1] !=null)
      this.flag=true
    }
  },
    methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      },
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      login(){
        var i =1
        if(i<2){
          this.flag=true
          i++
        }
    
      },
     routerto(){
     this.$router.push({
         path:"/login",
         name: "Login"
         })
   this.reload()
     },
     routerto2(){
       this.$router.push({
         path:"",
         name:""
       })
       this.reload()
     }
     ,
     routerto3(){
        window.location.href ="http://localhost:8002/"
     },
    

  
    }
}
</script>



<style scoped>

.loading-wrapper {
   position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.logo1{
  position: relative;
  z-index: 100;
   font-size: 20px;
   top: -840px;
   left: 850px;
   color: rgb(221, 136, 25);
}
.login-wrapper img{
   position: relative; 
    width: 100%;
  height: 100%;
  z-index: -100;

}

.Main{
  position: relative;
  z-index: 9;
  left: 200px;
  top:-1000px;
  /* background-color: rgb(245, 234, 234); */
  
}

.word{
  font-size: 25px;
  font-family: fantasy;
  text-align: center;
}

.main2{
 position: relative;
  z-index: 9;
  left: 0px;
  /* background-color:rgb(252, 248, 248); */
  width:1100px;
  height: 770px;

}

.login{
  position: absolute;
  left: 1000px;
  top:38px;
}
.el-row {
    margin-bottom: 30px;
  
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #bdcdf3;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

 
  /* 轮播图 */
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 2;
    line-height: 150px;
    margin: 0;   
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel{
    border: 4px solid;
    border-radius:4px ;
  }

  .lun_img{
    height: 100%;
    width: 100%;
  }
.main1{
  position: relative;
  top: 0px;
  right: 185px;
}
.el-tabs{
  border:4px solid;
box-shadow: 10px 10px 5px #000000;
background-color: rgb(0, 0, 0);
 border-radius: 4px;
}

.test{
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  
}
.same{
  border: 4px solid;
   border:4px solid;
box-shadow: 10px 10px 5px #000000;
background-color: rgb(131, 130, 130);
 border-radius: 4px;
}
</style>