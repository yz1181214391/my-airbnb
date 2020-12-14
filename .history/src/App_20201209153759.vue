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
  *{
    margin: 0;
    padding: 0;
  }
  .banner{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
</style>
