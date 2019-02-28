<template>
  <div class="details">
   <p class="title">标题</p> 
   <p class="zuo">薪火科技 <span>发标日期</span></p>
    
   <div class="tap">
      <div @click="wechatsgo">
         <img :src="wechat" alt="" class="imgd">
         <button class="wecharfx" type="default" size="default" plain="true" open-type="share"> 微信分享 </button>
      </div>
      <div @click="isshowcanvashb">
        <img :src="hb" alt="" class="imgd">
         海报生成
      </div>
      
   </div>
   <div v-show="isshows" class="canvashbs"  @click="canvasbggo">
   </div>
   <div v-show="isshow" class="canvashb">
    <div class="cc">
    <canvas style="width:300px;height:430px; " canvas-id="firstCanvas"></canvas>
   </div>
   
   <button @click="save">保存</button>
   </div>
  </div>
</template>
<style>
.wecharfx {
  margin-top: 0px !important;
  border: none !important;
  width: 185rpx !important;
  float: right;
  padding: 0px !important;
}
.cc {
  background: white;
  border-radius: 25px;
  height: 430px;
  position: absolute;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 55px;
  z-index: 999999999;
}
.canvashb {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  left: 0;
  top: 0px;
  padding: 60px 0px;
}
.canvashbs {
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  left: 0;
  top: 0px;
  padding: 60px 0px;
  z-index: 99;
}
canvas {
  width: 80%;
  margin: 0 auto;
}
button {
  z-index: 9999999;
  background: #3d7efe;
  height: 35px;
  line-height: 35px;
  margin-top: 120%;
  width: 100px;
  color: white;
  border-radius: 50px;
}
.tap div {
  float: left;
  padding-left: 5px;
}
.imgd {
  height: 20px;
  width: 20px;
  vertical-align: middle;
}
.details {
  width: 90%;
  margin: 0 auto;
}
.tap {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 35px;
  border-top: 1px solid #e5e5e5;
  line-height: 35px;
  width: 100%;
  text-align: right;
  padding-left: 38%;
}
.details .title {
  font-size: 19px;
  line-height: 30px;
  padding: 15px 0;
}
.zuo {
  font-size: 14px;
  color: #3d7efe;
  width: 100%;
}
.zuo span {
  float: right;
  color: #999;
}
</style>

<script>
export default {
  data() {
    return {
      isshows: false,
      isshow: false,
      uploadimg: false,
      motto: "Hello World",
      userInfo: {},
      wechat: require("../../img/wechat.png"),
      hb: require("../../img/hb.png"),
      hbs: require("../../img/2.png"),
      chengxu: require("../../img/chengxu.jpg")
    };
  },

  components: {},
  onShareAppMessage: function(res) {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "123",
      path: "pages/details/main"
    };
  },
  methods: {
    canvasbggo() {
      this.isshow = false;
      this.isshows = false;
    },

    isshowcanvashb() {
      this.isshow = true;
      this.isshows = true;
      this.onReadyimg();
    },
    save() {
      this.uploadimg = true;
      this.onReadyimg();
    },
    upimg() {
      setTimeout(function() {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 300,
          height: 430,
          destWidth: 600,
          destHeight: 830,
          canvasId: "firstCanvas",
          success: function(res) {
            wx.showToast({ title: "保存成功" });
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath
            });
          },
          fail: function() {
            console.log("生成临时文件失败");
          }
        });
      }, 100);
    },
    onReadyimg() {
      var ctx = wx.createCanvasContext("firstCanvas");
      ctx.setFontSize(18);
      ctx.fillText("最高20枚BTC赔付宝保！", 20, 40);
      ctx.setFontSize(12);
      ctx.setFillStyle("#5189fe");
      ctx.fillText("薪火科技", 20, 60);
      ctx.setFillStyle("#a2b6ce");
      ctx.fillText("18-08", 75, 60);
      ctx.setFontSize(14);
      ctx.setFillStyle("#596785");
      ctx.fillText("了空间大快速肯定就是", 20, 80);
      ctx.fillText("了空间大快速肯定就是", 20, 95);
      ctx.fillText("日前基拉健康的骄..", 20, 110);
      ctx.drawImage(this.hbs, 200, 50, 90, 80);
      ctx.setFillStyle("#333b4a");
      ctx.fillText("长按扫码阅读", 20, 130);
      ctx.drawImage(this.hbs, 20, 150, 260, 262);
      ctx.draw(true, this.uploadimg == false ? "" : this.upimg());
    }
  },

  created() {}
};
</script>
