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
  .app-header{
    width: 100%;
    height: 529px;
    background-color: #cccccc;
    3
  }
</style>
