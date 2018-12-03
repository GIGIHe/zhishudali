<template>
  <div>
    <h3 class="top-title">知书达理后台</h3>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router=true
    >
      <el-submenu index="1">
        <template slot="title">
          <span>登录</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/login">登录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/index">首页</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>课程管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">课程列表</el-menu-item>
          <el-menu-item index="3-2">课程banner</el-menu-item>
          <el-menu-item index="3-3">课程分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>谁来帮我</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">问答列表</el-menu-item>
          <el-menu-item index="4-2">专家列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span>我有高招</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/shareList">分享列表</el-menu-item>
          <el-menu-item index="/layout/shareCatagory">分享分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <span>其他管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">用户列表</el-menu-item>
          <el-menu-item index="6-2">管理员列表</el-menu-item>
          <el-menu-item index="6-3">区域列表</el-menu-item>
          <el-menu-item index="6-4">收益列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>菜单管理</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/layout/mainMenu">主菜单管理</el-menu-item>
          <el-menu-item index="/layout/listMenu">分栏管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
.el-menu-vertical-demo {
  /* position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  width: 238px;
  margin-top: 40px; */
  height: 100vh;
  border: none;
}
</style>

<style scoped>
.top-title {
  height: 40px;
  background-color: #409eff;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
</style>