<template>
 <div class="layout-wrap">
        <el-row>
            <el-col :span="4">
                <Slide></Slide>
            </el-col>
            <el-col :span="20" class="right">
                <el-row class="head-wrap">
                    <Header></Header>
                </el-row>
                <el-row class="content">
                    <router-view></router-view>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Slide from '@/components/Slide'
    export default {
        components:{
            Header,Slide
        }
    }
</script>

<style scoped>
.content{
    /* margin-top: 20px; */
    /* border: 1px solid #f00; */
    background-color: #eee;
    height:478px;
}
   
</style>