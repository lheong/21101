<template>
  <div class="temo">
    <el-container>
      <el-header>
        <div class="tapTemo">
          <img src="../assets/logo.png" alt="" />
          <el-menu
            default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            background-color="transparent"
            text-color="#ccc"
            active-text-color="#fff"
          >
            <el-menu-item index="1">用户</el-menu-item>
            <el-menu-item index="2">教学</el-menu-item>
            <el-menu-item index="3">题库</el-menu-item>
            <el-menu-item index="4">运营</el-menu-item>
            <el-menu-item index="5">营销</el-menu-item>
            <el-menu-item index="6">商品</el-menu-item>
            <el-menu-item index="7">财务</el-menu-item>
            <el-menu-item index="8">统计</el-menu-item>
            <el-menu-item index="9">系统</el-menu-item>
          </el-menu>
          <div></div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#333"
            active-text-color="blue"
            router>
            <el-menu-item index="/index"><span slot="title">学生管理</span></el-menu-item>
            <el-menu-item index="/submit"><span slot="title">讲师管理</span></el-menu-item>
            <el-menu-item index="3"><span slot="title">助教管理</span></el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "temo",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.temo {
  width: 100%;
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-header {
  background-image: linear-gradient(to right, #2845cb, #3798fe);
  color: #fff;
  .tapTemo {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 60px;
      height: 40px;
    }
  }
}
.el-container {
  height: 100%;
}
.el-aside {
  width: 100%;
  height: 100%;
}

.el-main {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
