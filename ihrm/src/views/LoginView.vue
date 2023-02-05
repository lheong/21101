<template>
  <div class="temo">
    <div class="box">
      <h1>iHRM 后台登录系统</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="ruleForm.mobile"
            :value="ruleForm.mobile"
            placeholder="请输入您的手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            :value="ruleForm.password"
            show-password
            placeholder="请输入您的密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入状态码
import { STATUS } from '../untils/http/Status.js'
// 引入 Cookies
import { setToken } from '../untils/http/auth.js'
// 引入登录接口
import { LoginPost } from '../untils/api/Login.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      ruleForm: {
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.mobile == '13800000002' &&
            this.ruleForm.password == '123456'
          ) {
            LoginPost(this.ruleForm).then((res) => {
              if (res.status == STATUS.SUCCESS) {
                setToken(res.data.data)
                this.$router.replace('/dashboard')
              }
              // console.log(res)
            })
          }else{
						console.log(111);
					}
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.temo {
  width: 100%;
  height: 100%;
  background-image: url(../assets/login.jpg);
  background-repeat: on-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.box {
  width: 400px;
  height: 400px;
  color: #ffffff;
}
.el-input {
  margin-top: 20px;
}
.el-button {
  width: 100%;
  background-color: #407ffe;
  border: 0px;
  margin-top: 20px;
}
</style>
