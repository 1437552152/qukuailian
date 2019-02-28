<template>
  <div class="reviewlist">
     <ul>
       <li v-for="item in reviewlist" :key="item.id">
         <img :src="item.imgsrc" alt="" >
         <p>{{item.title}}</p>
       </li>
     </ul>
  </div>
</template>

<style>
.reviewlist {
  width: 90%;
  margin: 0 auto;
  margin-top: 23px;
}
.reviewlist ul li{
  float: left;
  width: 48%;
  align-items: center;
  margin: 0px 1%;
  margin-bottom: 10px;
  text-align: center;
}
img{
  width: 100%;
  height: 150px;
  border-radius: 15px;
}
</style>

<script>

export default {
  components: {
    
  },

  data () {
    return {
      logs: [],
      reviewlist:[
        {
          id:'1',
          imgsrc:require("../../img/1.jpg"),
          title:"123"
        },
          {
          id:'12',
          imgsrc:require("../../img/1.jpg"),
          title:"123"
        },
          {
          id:'13',
          imgsrc:require("../../img/1.jpg"),
          title:"123"
        },
          {
          id:'14',
          imgsrc:require("../../img/1.jpg"),
          title:"123"
        },
      ],
    }
  },

  created () {
   
  }
}
</script>

<style>

</style>
