<template>
    <div class="airbnb-box">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple" style="display:flex">
            <a href="###"><img class="logo" src="../assets/img/012-zhandian.png" alt=""></a>
            <el-input v-model="input" style="width: 460px;height: 48px;" prefix-icon='el-icon-search' placeholder="按城市、地址、地标搜索"></el-input>
          </div>
        </el-col>
        <el-col :span="10" :offset="6">
          <div class="grid-content bg-purple nav-box">
            <router-link to="/Language">语言</router-link> 
            <router-link to="/Currency">货币</router-link> 
            <router-link to="/Mobile">手机端</router-link> 
            <router-link to="/Room">出租房源</router-link> 
            <router-link to="/Experience">开展体验</router-link> 
            <router-link to="/History">历史足迹</router-link> 
            <router-link to="/Help">帮助</router-link> 
            <router-link to="/Register">注册</router-link> 
            <router-link to="/Enter">登录</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple" style="margin:80px 0; margin-left:-340px">
            <h1 style="font-size:32px;color:#fff">再见吧！2020</h1>
            <div class="preferential-btn">进入特惠专场</div>
          </div>
        </el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="16" :offset="4" class="input-box">
          <!-- <div class="grid-content bg-purple1"> -->
            <div class="demo-input-suffix" style="display:flex;align-items: center;">
              <div style="width:100px;height:100%; text-align: center;">房源</div>
              <div style="width:570px;height:100%;border-right: 1px solid #cccccc;border-left: 1px solid #cccccc;">
                <el-input
                  placeholder="输入目的地、城市或景点"
                  prefix-icon="el-icon-location"
                  v-model="input21">
                </el-input>
              </div>
              <div style="width:270px;height:100%;border-right: 1px solid #cccccc;">
                <el-input
                  placeholder="请选择入住日期"
                  suffix-icon="el-icon-date"
                  v-model="input2">
                </el-input>
              </div>
              <div style="width:116px;height:100%;text-align: center;">
                <div class="search-btn">搜索</div>
              </div>
            </div>
          <!-- </div> -->
        </el-col>
      </el-row>
    </div>
</template>

<script>
// import Banner from './components/Banner'
export default {
    data(){
      return {
        input:'',
        input2:'',
        input21:'',
      }
    }
  // components:{
  //   Banner
  // }
}
</script>


<style lang="less">
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
input{   
  border:none !important;
  
}

.airbnb-box{
    width: 100%;
    height: 529px;
     
    // background-color: #cccccc;
  }

.el-row {
    margin-bottom: 20px;
    margin-left: 0 !important;
    margin-right: 0 !important;
    display: flex;
    &:first-child{
     
      align-items: center;
      width: 100%;
      height: 80px;
     
      // background-color: #99a9bf;
    }
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
  .bg-purple1 {
    // height: 40px;
    // background: #d3dce6;
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


.logo{
  width: 30px;
  height: 30px;
  margin: 0 24px;
}
.preferential-btn{
  width:144px;
  height:48px;
  border:2px solid #ffff;
  border-radius:5px;
  text-align: center;
  line-height: 48px;
  color:#fff;
  margin: 32px 0;
}
.nav-box > a{
  margin-left: 24px;
  color: #fff;
}
.input-box{
  width: 100%;
  height: 72px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.search-btn{
  width: 69px;
  height: 49px;
  background-color: #FF5A5F;
  line-height: 49px;
  border-radius: 4px;
  color: #fff;
  margin-left: 18px;
}
</style>
