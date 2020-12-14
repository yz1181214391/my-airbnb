<template>
  <div id="app">
    <div class="app-header">
      <Header/>
      <!-- <Banner class="banner"/>  -->
    </div>
    
  </div>

</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'

export default {
   name: 'app',
  components:{
    Banner,
    Header
  }
}
</script>


<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
 
  html,body {margin: 0;padding: 0;height: 100%;width: 100%;}
  a {text-decoration: none;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {margin: 0;padding: 0;}
  table {border-collapse: collapse;border-spacing: 0;}
  fieldset,img {border: 0;}
  address,caption,cite,code,dfn,em,strong,th,var {font-style: normal;font-weight: normal;}
  ol,ul {list-style: none;}
  caption,th {text-align: left;}
  h1,h2,h3,h4,h5,h6 {font-size: 100%;font-weight: normal;}
  q:before,q:after {content: '';}
  abbr,acronym {border: 0;}
  body{
      font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .banner{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
</style>
