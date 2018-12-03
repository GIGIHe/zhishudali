<template>
    <div class="login-wrap bg-c">
        <div class="form-box">
            <h3 class="title">知书达理后台管理平台</h3>
            <el-form :model="formdata"  status-icon :rules="rules" ref="formdata">
                <el-form-item  required prop="username">
                    <el-input v-model="formdata.username" placeholder="请填写用户名"/>
                </el-form-item>
                <el-form-item  required prop="password">
                    <el-input type="password" v-model="formdata.password" placeholder="请填写密码" @keyup.enter.native="handleSubmit"/>
                </el-form-item>
                 <el-form-item >
                    <el-input placeholder="请填写验证码" />
                </el-form-item>
                <el-button type="primary" class="btn" @click="handleLogin">登录</el-button>
            </el-form>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value || value.length < 5) {
        callback(new Error("请输入合法的密码"));
      } else {
        callback();
      }
    };
    return {
      formdata: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods:{
      handleLogin(){
      }
  }
};
</script>

<style>
.el-form-item__label {
    color: #fff;
  }

</style>

<style scoped >
.login-wrap {
  height: 100vh;
  /* 解决margin塌陷 */
  overflow: hidden;
  background-color: #000;
}
.title{
    color:#666;
    font-weight:500;
    text-align: center;
    margin:40px auto 20px;
}
.form-box {
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    height: 410px;
    width: 340px;
    margin: 100px auto;
    box-sizing: border-box;
    padding: 4px;
    background-color: #fff;
   
  } 
    .btn {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
</style>