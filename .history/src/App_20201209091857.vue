<template>
  <div id="app">
    <div id="nav">
      <a href="###"><img class="log-img" src="./assets/img/012-zhandian.png" alt=""></a>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Banner/>
    <router-view/>
  </div>
</template>

<script>
import Banner from './components/Banner'
export default {
   name: 'app',
  components:{
    Banner
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
