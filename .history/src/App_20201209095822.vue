<template>
  <div id="app">
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            logo+搜索框
          </div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">
            导航栏
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">
            <h1>再见吧！2020</h1>
            <div>进入特惠专场</div>
          </div>
        </el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            选择输入框
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="nav">
      <a href="###"><img class="log-img" src="./assets/img/012-zhandian.png" alt=""></a>
      <input type="text" >
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


.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }



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
