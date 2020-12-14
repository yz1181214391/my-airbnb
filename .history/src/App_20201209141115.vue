<template>
  <div id="app">
    <div class="app-header">
      <Header/>
      <!-- <Banner/>  -->
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
  element.style {
      margin-left: 0  !important;
      margin-right: 0  !important;
  }
</style>
