<template>
    <div class="login-container">
      <h1 class="title">登陆</h1>
<el-form :label-position="labelPosition" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input  @keydown.native.enter="login" v-model="password" type="password"></el-input>
  </el-form-item>
  <el-button type="primary" @click="login">登录</el-button>
    
  
</el-form>
    </div>
</template>

<script>
export default {
     data() {
      return {
        labelPosition: 'left',
        username:'',
        password:''
      };
    },
    methods:{
      login(){
        if(!this.username.trim()||!this.password.trim())
        return this.$message({
          message:"请输入用户名或密码哦!",
          type:"warning"
        });
        this.$http.post('users/login',{
          username:this.username,
          password:this.password
        }).then(result=>{
           // 将Token存储到localStorage
         localStorage.setItem("token",result.data.data.token);
         localStorage.setItem("userInfo",JSON.stringify(result.data.data))
          // 登录成功提醒用户
         this.$message({
           message:result.data.succMsg,
           type:'success'
         });
         // 登录成功跳转到首页
         this.$router.push("/home")
        })
        .catch(err=>{
          this.$message.error(err.response.data.errMsg);
        })
      }
    }
}
</script>
<style lang="less">
    .login-container{
      width: 500px;
      margin: 100px auto;
      border: 1px solid #ccc;
      border-radius:10px;
      padding: 30px;
      box-shadow:0 0 10px #ccc;
      .title{
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 15px;
      }
    }
</style>