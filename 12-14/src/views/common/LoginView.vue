<template>
  <div class="login">
    <el-form :model="ruleForm" class="from" :rules="rules" ref="ruleForm">
      <img src="../../assets/logo.png" alt="" />
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "../../untils/auth.js"
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.send("/login", this.ruleForm, "post").then((res) => {
            console.log(res)
            /**判断是不是相应成功,和状态码 */
            if (res && res.data.meta.status === 200) {
              const { token, username } = res.data.data
              /**把token 存储到cookie中 */
              setToken(token)
              /**提示登录成功 */
              this.$notify({
                title: "登录成功",
                message: "欢迎光临[" + username + "]",
                type: "success",
                duration: 2000
              })
              this.$router.replace("/welcome")
            } else {
              /**提示登录失败 */
              this.$notify({
                title: "登录失败",
                message: res.data.meta.msg,
                type: "error",
                duration: 2000
              })
            }
          })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  // background-color: #2e3034;
  background-image: url("../../assets/300297.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.from {
  width: 500px;
  background-color: #fff;
  padding: 80px 20px;
  border-radius: 8px;
  padding-bottom: 50px;
  position: relative;
  img {
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 150px;
    top: -100px;
    left: 190px;
    border: 10px solid #fff;
    box-shadow: 5px 5px 10px #ccc;
    background-color: #ccc;
  }
}
.btn {
  text-align: right;
}
</style>
