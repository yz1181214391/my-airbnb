<template>
    <div class="airbnb-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <a href="###"><img class="log-img" src="../assets/img/012-zhandian.png" alt=""></a>
            <input type="text" >
          </div>
        </el-col>
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">
            <!-- 导航栏 -->
            <router-link to="/Language">语言</router-link> |
            <router-link to="/Currency">货币</router-link> |
            <router-link to="/Mobile">手机端</router-link> |
            <router-link to="/Room">出租房源</router-link> |
            <router-link to="/Experience">开展体验</router-link> |
            <router-link to="/History">历史足迹</router-link> |
            <router-link to="/Help">帮助</router-link> |
            <router-link to="/Register">注册</router-link> |
            <router-link to="/Enter">登录</router-link>
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
</template>

<script>
// import Banner from './components/Banner'
// export default {
//    name: 'app',
//   components:{
//     Banner
//   }
// }
</script>


<style lang="less">
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


.log-img{
  width: 30px;
  height: 30px;
}
</style>
