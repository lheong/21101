<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse ? '63px' : '200px'">
        <el-menu
          default-active="$router.puth"
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu :index="item.path" v-for="item in leftList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ item.authName }}</span>
            </template>
            <el-menu-item v-for="ele in item.children" :key="ele.id" :index="ele.path">{{ ele.authName }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <header>
          <span class="left-span">
            <i @click="isCollapse = !isCollapse" class="el-icon-s-unfold"></i>
            <h1>电商后台管理系统</h1>
          </span>
          <span class="btn" @click="exit"> 退出登录 </span>
        </header>
        <div class="con">
          <el-breadcrumb separator="/" v-for="(item, index) in $route.meta" :key="index">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ item.title }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNav: "",
      leftList: [],
      isCollapse: false
    }
  },
  // // 监听列表
  // watch: {
  //   $route: {
  //     deep: true,
  //     immediate: true,
  //     handler(newVal) {
  //       console.log(newVal)
  //       this.activeNav = newVal.path
  //     }
  //   }
  // },
  methods: {
    exit() {
      this.$router.push("/")
      this.$message({
        message: "成功退出",
        type: "success"
      })
    }
  },
  created() {
    this.$http({ method: "get", data: this.ruleForm, url: "/api/menus" }).then((res) => {
      // console.log(res)
      this.leftList = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background: #373d41;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  .left-span {
    display: flex;
    align-items: center;
  }

  .el-icon-s-unfold {
    line-height: 60px;
    font-size: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .btn {
    padding: 10px 15px;
    border-radius: 8px;
    background: rgba(204, 204, 204, 0.252);
  }
}
.con {
  display: flex;
  align-items: center;
  padding-left: 10px;
	height: 40px;
}
</style>
