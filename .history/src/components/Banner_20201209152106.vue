<template>
  <div>
      <div class="banner">
          <img v-for="(v,i) in img " :key="i" :src="v" v-show="i==n" alt="">
          <div class="banner-circle">
              <ul>
                 <li v-for="(v,i) in img" :key="i" :class="i==n ? 'selected' : ''"></li>
              </ul>    
          </div>  
      </div>
  </div>
</template>

<script>
export default {
  data (){
      return{
          n:0,
          img:[
              require("../assets/img/banner1.jpg"),
              require("../assets/img/banner2.jpeg")
          ]
      }
  },
  methods : {
      fun:function(){
          setInterval(this.play,2000)
      },
      play:function(){
          this.n++;
          if(this.n == this.img.length){
              this.n = 0
          }
      }
  },
  mounted:function(){
          this.fun()
      }  
}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style-type: none;
    }
    body{
        font-size: 14px;
        background: #ffffff;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    html,body{
        max-width: 720px;
        height: 100%;
        margin: 0 auto;
    }
    .banner{
        position: relative;
    }
    .banner .banner-circle{
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        color: #ffffff;
    }
    .banner .banner-circle li{
        display: inline-block;
        background: rgba(0,0,0,0.3);
        border-radius: 50%;
        padding: 5px;
        margin: 5px;
    }
    .banner .banner-circle ul{
        text-align: center;
    }
    .banner .banner-circle .selected{
        background: rgba(0,0,0,0.8);
    }
    .banner img{
        width: 600px;
        height: 300px;
        margin: 0;
        padding: 0;
    }
</style>

