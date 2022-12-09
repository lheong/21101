<template>
  <div class="login">
    <el-form :model="ruleForm" class="from" :rules="rules" ref="ruleForm">
      <img src="../assets/300297.jpg" alt="" />
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
          { min: 3, max: 8, message: "请输入3 ~ 8位的字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 8, message: "请输入3 ~ 8位的字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      // console.log(this, "this")
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.username == "admin" && this.ruleForm.password == "123456") {
            this.$http({ method: "post", data: this.ruleForm, url: "/api/login" }).then((res) => {
              // console.log(res)
              if (res.data.meta.status == 200) {
                this.$router.push("/home")
              }
            })
          } else {
            this.$message.error("密码或用户名错误")
          }
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
  background-color: #2e3034;
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
