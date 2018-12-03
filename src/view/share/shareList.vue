<template>
  <div class="font-size">
    <div class="select-box">
      <span>用户名:</span>
      <el-select v-model="value">
        <el-option value="1"></el-option>
      </el-select>
      <span>状态:</span>
      <el-select v-model="value">
        <el-option value="1"></el-option>
      </el-select>
      <span>问题类型:</span>
      <el-select v-model="value">
        <el-option value="1"></el-option>
      </el-select>
    </div>
    <div class="search">
      <span>关键字搜索:</span>
      <el-input type="text" placeholder="输入要搜索的内容" size="mini" class="search-box"/>
      <el-button type="primary" size="mini">搜索</el-button>
    </div>
    <el-table
      :data="tableData"
       border
      style="width: 900px;margin:10px auto;">
      <el-table-column
        prop="date"
        label="用户ID"
        width="100"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="title"
        label="分享标题"
        width="120">
      </el-table-column>
       <el-table-column
        prop="catagory"
        label="分享分类"
        width="120">
        </el-table-column>
        <el-table-column
        prop="address"
        label="是否付费"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态"
        width="100">
        </el-table-column>
          <el-table-column label="操作" >
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button
          size="mini">模块推荐</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      userData: [],
      status: [],
      types: [],
      tableData:[
          {
              title:'heh'
          }
      ]
    };
  },
  methods:{
      handleDelete(){

      }
  }
};
</script>
<style>
</style>

<style scoped>
/* @import "src/styles/common.css"; */
.select-box,
.search {
  width: 840px;
  margin: 20px auto;
}
.search-box {
  width: 200px;
  margin-right:10px;
}
</style>