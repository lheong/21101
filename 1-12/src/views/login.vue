<template>
  <div class="title">
    <el-form class="form">
      <h1>i H R M 后 台 登 录 系 统</h1>
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="form.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="form.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dl">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    dl() {
      if (
        this.form.username == "13800000002" &&
        this.form.password == "123456"
      ) {
        this.$router.push("/home")
        this.$message.success("登录成功")
      } else {
        this.$message.error("密码或用户名错误")
      }
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.title {
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/login.jpg);
  text-align: center;
  color: #fff;
}

h1 {
  font-size: 33px;
  margin-bottom: 30px;
  font-weight: 400;
}

.el-button {
  width: 100%;
  height: 50px;
  background-color: #407ffe;
}

.form {
  width: 380px;
  margin-top: 0px;
  border-radius: 5px;
}
</style>
