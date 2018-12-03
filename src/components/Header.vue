<template>
    <div class="head">
<ul class="nav-head clearfix"><li>首页</li><li>课程管理</li><li>谁来帮我</li><li>我有高招</li><li>其他管理</li><li>菜单管理</li></ul>
<div class="drop-down clearfix"> 
    <i class=""><img src="../../static/image/admin.jpg" alt=""></i>
    <el-dropdown>
  <span class="el-dropdown-link">
    管理员<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>退出登录</el-dropdown-item>
    <el-dropdown-item>修改密码</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.head{
    height: 40px;
    width: 100%;
    line-height: 40px;
    /* border: 1px solid #000; */
}
.head .nav-head{
    width: 60%;
    float: left;
    margin-left: 120px;
    /* border: 1px solid #f00; */
}
.head li{
    float: left;
    font-weight: 700;
    width: 16.66%
}
.head img{
    width: 36px;
    height: 36px;
    vertical-align: middle;
}
.drop-down{
    float: right;
    margin-right: 10px;
}
</style>