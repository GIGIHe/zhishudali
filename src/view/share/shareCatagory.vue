<template>
  <div class="share">
    <div class="content">
      <addCatagory></addCatagory>
      <el-table :data="tableData" border style="width: 800px ">
        <el-table-column prop="date" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="所属区域" width="180"></el-table-column>
        <el-table-column prop="address" label="分类名称"></el-table-column>
        <el-table-column prop="address" label="状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import addCatagory from '@/components/addCatagory'
export default {
    components:{
        addCatagory
    },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style scoped>
.share {
  padding-top: 10px;
  box-sizing: border-box;
}
.share .content {
  width: 800px;
  margin: 0 auto;
}
/* .addCatagory {
  font-size: 14px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #555;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  margin-left: 20px;
  cursor: pointer;
} */
</style>