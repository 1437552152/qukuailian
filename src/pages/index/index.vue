<template>

  <div>
  
   <div class="wqlisttit">
      往期回顾
     <p @click="morego">更多</p>
   </div>
   <div  class="wqlist">
     <div v-for="item in wqlist" :key="item.id">
     <img :src="item.img" alt="" style="height:120px">
     <p>{{item.title}}</p>
     </div>
   </div>
   <div class="wqlisttit">
     封面故事
     <p >第十月第十一期</p>
   </div>
   <div class="wqdeatil">
     <img :src="fmimg" alt="" style="width:100%" @click="wqgo">
     <p>16个新故事+</p>
   </div>
  </div>
</template>
<style>
.wqlist p {
  font-size: 14px;
}
.wqlisttit {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  font-size: 20px;
}
.wqdeatil img {
  height: 350px;
  border-radius: 15px;
}
.wqdeatil {
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 25px;
}
.wqdeatil p {
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  bottom: -5px;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  width: 100px;
  background: #4ca3fb;
  color: aliceblue;
  font-size: 15px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 5px 5px 5px #888888;
}
.wqlisttit p {
  font-size: 16px;
  color: #999;
  display: inline-block;
  flex: 1;
  text-align: right;
}
.wqlist {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 10px 0;
  padding-bottom: 23px;
}
.wqlist div {
  width: 31.3%;
  float: left;
  overflow: hidden;
  text-align: center;
}
.wqlist div:nth-child(even) {
  margin: 0px 3%;
}

.wqlist img {
  width: 100%;
  height: 120px;
  border-radius: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      fmimg: require("../../img/2.png"),
      wqlist: [
        {
          id: 1,
          img: require("../../img/1.jpg"),
          title: "10月第十期"
        },
        {
          id: 2,
          img: require("../../img/1.jpg"),
          title: "10月第九期"
        },
        {
          id: 3,
          img: require("../../img/1.jpg"),
          title: "10月第八期"
        }
      ]
    };
  },

  components: {},

  methods: {
    allProduct() {
      this.$http.Xcclogin({}).then(res => {});
    },
    morego() {
      wx.navigateTo({
        url: `/pages/logs/main`
      });
    },
    wqgo() {
      wx.navigateTo({
        url: `/pages/counter/main`
      });
    }
  },

  created() {
    this.allProduct();
  }
};
</script>
