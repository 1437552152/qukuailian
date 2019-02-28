<template>
  <div class="reviewlist">
    
  <!--垂直滚动，这里必须设置高度-->
  <div v-for="item in reviewlist" class="newslist">
    <div class="time">
      2018 <br />
      11/07
    </div>
     <div class="title">
      <p> {{item.title}}</p>
      <div>
        {{item.deails}}
      </div>
     </div>
  </div>
  </div>
</template>

<style>
.newslist {
  display: flex;
}
.reviewlist{
  background: #999;
}
.reviewlist div{
  height: 170px;
  line-height: 45px;
  margin-bottom: 15px;
  background: pink;
}

/**/

scroll-view {
  width: 100%;
}

.item {
  width: 90%;
  height: 300rpx;
  margin: 20rpx auto;
  background: brown;
  overflow: hidden;
}

.item .img {
  width: 430rpx;
  margin-right: 20rpx;
  float: left;
}

.title {
  font-size: 30rpx;
  display: block;
  margin: 30rpx auto;
}

.description {
  font-size: 26rpx;
  line-height: 15rpx;
}
</style>

<script>
export default {
  data() {
    return {
      hidden: true,
      scrollHeight: 100,
      scrollTop: 0,
      logs: [],
      reviewlist: [
        {
          id: "1",
          imgsrc: require("../../img/1.jpg"),
          title: "123",
          deails:'445a5df4sdf4sd55f6sd54f5555555555555555555555555555555556ds5f65d4s',
        },
        {
          id: "12",
          imgsrc: require("../../img/1.jpg"),
          title: "123"
        },
        {
          id: "13",
          imgsrc: require("../../img/1.jpg"),
          title: "123"
        },
        {
          id: "14",
          imgsrc: require("../../img/1.jpg"),
          title: "123"
        }
      ]
    };
  },

  methods: {},
  onReachBottom: function() {
  },
  created() {}
};
</script>

