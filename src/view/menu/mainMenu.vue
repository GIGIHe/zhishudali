<template>
    <div>
<el-card>
    <div slot="header">主菜单管理</div>
<el-table
:data="tableData"
style="width: 800px"
border
>
<el-table-column
prop = 'index'
label = "序号"
width="100"
>
</el-table-column>
<el-table-column
prop = 'menuname'
label = "菜单名称"
>
</el-table-column>
<el-table-column
prop = 'index'
label = "操作"
>
<template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
</el-table-column>
</el-table>
</el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[]
            }
        }
    }
</script>

<style scoped>

</style>