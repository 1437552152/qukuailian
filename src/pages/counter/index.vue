<template>
  <div class="zl">
   <p class="zltitle">
     <img class="titleimgUrl" :src="titleimgUrl" alt="">
     <span class="title">专栏</span>———区块链那些事
     </p> 
  <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
  <block v-for="item in imgUrls" :key="item">
    <swiper-item>
      <img :src="item.imgUrl" class="slide-image" width="355" />
      <p class="bannertitle">{{item.title}}</p>
    </swiper-item>
  </block>
</swiper>
<div class="Hotreview">
 <p>热点回顾 <span>更多</span></p>
 <ul>
   <li v-for="item in Hotreviewlist" :key="item.id" @click="Hotreviewgo(item)">
         {{item.title}}
   </li>
 </ul>
</div>
<div class="analysis">
 <p class="analysistit">技术解析</p>
 <ul>
   <li  v-for="item in analysislist" :key="item.id">
     <div v-if="item.imgUrls.length < 1" class="titlist">
               {{item.title}}
     </div>
       <div v-else class="analysislists">
          <div class="analysisliststitle">
           <p> {{item.title}}</p>
           <span>薪火科技</span>
          </div>
          <div class="analysislistsimg">
           <img :src="item.imgUrls" alt="">
         </div>
         </div> 
   </li>
 </ul>
</div>
<div class="line"></div>
<div class="analysis">
 <p class="analysistit">政策透析</p>
 <ul>
   <li  v-for="item in analysislist" :key="item.id">
     <div v-if="item.imgUrls.length < 1" class="titlist">
               {{item.title}}
     </div>
       <div v-else class="analysislists">
          <div class="analysisliststitle">
           <p> {{item.title}}</p>
           <span>薪火科技</span>
          </div>
          <div class="analysislistsimg">
           <img :src="item.imgUrls" alt="">
         </div>
         </div> 
   </li>
 </ul>
</div>
<div class="imglist">
  <p>趣闻轶事</p>
  <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
     <img  v-for="item in imgUrls" :key="item.id" :src="item.imgUrl" alt="">
  </scroll-view>

</div>
  </div>
</template>

<style scoped>
.imglist {
  margin-left: 5%;
}
.imglist p{
  position: relative;
  padding: 20px 0;
  width: 90%;
  margin: 0 auto;
}
.imglist p:after {
  content: "";
  position: absolute;
  top: 26px;
  width: 25px;
  height: 12px;
  background: #b3e3df;
  left: -8px;
  z-index: -666;
}
.scroll-view_H{
  width: 100%;
  white-space: nowrap;
}
.scroll-view-item_H{
  width: 200px;
  height: 100px;
  display: inline-block;
}

.imglist img{
  height: 50px;
  width: 100px;
  margin: 0 15px;
}
.line{
  width: 100%;
  height: 15px;
  background: #f1f3f7;
}
.titlist {
  height: 45px;
  line-height: 45px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #445272;
  border-bottom: 1px solid #f1f3f7;
}
.analysis {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.analysislists {
  display: flex;
  height: 120px;
  border-bottom: 1px solid #e5e5e5;
}
.analysisliststitle {
  float: left;
  width: 50%;
}
.analysisliststitle p {
  font-size: 17px;
  display: inline-block;
  width: 100%;
  padding: 5px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.analysisliststitle span {
  display: inline-block;
  font-size: 13px;
  text-align: left;
  margin-top: 18px;
  color: #999;
}
.analysislistsimg {
  float: left;
  width: 50%;
  padding: 5px 15px;
}
.analysislistsimg img {
  height: 100px;
  width: 100%;
  border-radius: 15px;
}
.Hotreview {
  width: 90%;
  margin: 0 auto;
}
.Hotreview span {
  float: right;
  font-size: 13px;
  color: #999;
}
.analysistit {
  position: relative;
  z-index: 9999;
  font-size: 20px;
  height: 35px;
  line-height: 35px;
  margin-bottom: 20px;
}
.analysistit:after {
  content: "";
  position: absolute;
  top: 6px;
  width: 25px;
  height: 12px;
  background: #b3e3df;
  left: -8px;
  z-index: -666;
}
.Hotreview p {
  margin-top: 270px;
  position: relative;
  z-index: 9999;
  font-size: 20px;
  height: 35px;
  line-height: 35px;
  padding-bottom: 8px;
}
.Hotreview p:after {
  content: "";
  position: absolute;
  top: 6px;
  width: 25px;
  height: 12px;
  background: #d1dff5;
  left: -8px;
  z-index: -666;
}
.Hotreview ul li {
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  color: #445272;
}
.bannertitle {
  font-size: 18px;
  color: black;
}
.slide-image {
  height: 200px;
  width: 100%;
  position: relative;
}
.zl .zltitle {
  display: flex;
  color: white;
  width: 90%;
  margin: 0 auto;
  padding: 16px 0;
}
.zl p .title {
  color: #2ddcec;
  font-size: 20px;
}
.titleimgUrl {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
swiper {
  height: 260px;
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.zl {
  background: #2f5cb6;
  height: 220px;
}
swiper {
  width: 90%;
  margin: 0 auto;
}
</style>

<script>
export default {
  data: {
    titleimgUrl: require("../../img/title.png"),
    
    imgUrls: [
      {
        ids: "1",
        imgUrl: require("../../img/banner.png"),
        title: "区块链的重要价值在于促进实体经济"
      },
      {
        ids: "12",
        imgUrl: require("../../img/banner.png"),
        title: "区块链的重要价值在于促进实体经济"
      },
      {
        ids: "13",
        imgUrl: require("../../img/banner.png"),
        title: "区块链的重要价值在于促进实体经济"
      },
      {
        ids: "133",
        imgUrl: require("../../img/banner.png"),
        title: "区块链的重要价值在于促进实体经济"
      },
      {
        ids: "134",
        imgUrl: require("../../img/banner.png"),
        title: "区块链的重要价值在于促进实体经济"
      }
    ],
    analysislist: [
      {
        id: "1",
        title: "区块链的重要价值在于促进实体经济发展",
        imgUrls: require("../../img/banner.png")
      },
      {
        id: "12",
        title: "区块链的重要价值在于促进实体经济发展",
        imgUrls: require("../../img/banner.png")
      },
      {
        id: "13",
        title: "区块链的重要价值在于促进实体经济发展",
        imgUrls: ""
      }
    ],
    Hotreviewlist: [
      {
        id: "1",
        title: "区块链的重要价值在于促进实体经济发展"
      },
      {
        id: "2",
        title: "区块链的重要价值在于促进实体经济发展"
      },
      {
        id: "3",
        title: "区块链的重要价值在于促进实体经济发展"
      }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  computed: {
    
  },
  methods: {
    Hotreviewgo(item){
       wx.navigateTo({
          url: `/pages/Hotreview/main?id=`+item.id
        })
    }
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
