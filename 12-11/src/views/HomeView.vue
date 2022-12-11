<template>
  <div class="temo">
    <el-container>
      <el-aside :width="isCollapse ? '63px' : '200px'">
        <el-menu
          default-active="$router.push"
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu
            :index="item.path"
            v-for="item in leftList"
            :key="item.id"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ item.authName }}</span>
            </template>
            <el-menu-item
              v-for="ele in item.children"
              :key="ele.id"
              :index="ele.path"
              >{{ ele.authName }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="hander">
          <div class="left-span">
            <i @click="isCollapse = !isCollapse" class="el-icon-s-unfold"></i>
            <span>电商后台管理系统</span>
          </div>
          <el-button type="info" @click="exit">退出</el-button>
        </div>
        <div class="con">
          <el-breadcrumb
            separator="/"
            v-for="(item, index) in $route.meta"
            :key="index"
          >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ item.title }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      /**监听当前页面 */
      activeNav: "",
      /**列表接口 */
      leftList: [],
      /**侧边栏折叠 */
      isCollapse: false
    }
  },
  // // 监听列表
  // watch: {
  //   $route: {
  //     deep: true, //深度监听
  //     immediate: true, //一上来就监听
  //     handler(newVal) {
  //       // console.log(newVal)
  //       this.activeNav = newVal.path
  //     }
  //   }
  // },
  created() {
    /** 请求的列表接口*/
    this.$http({ method: "get", url: "/api/menus" }).then((res) => {
      // console.log(res)
      this.leftList = res.data.data
    })
  },
  mounted() {},
  methods: {
    exit() {
      this.$router.replace("/")
      this.$notify({
        title: "退出成功",
        message: "已成功退出该账号,请从新登录。",
        type: "success",
        duration: 2000
      })
    }
  }
}
</script>
<style scoped lang="scss">
.temo {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-aside,
  .el-main,
  el-menu {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .el-menu {
    border-right: 0px;
    margin-top: 60px;
  }
  .el-aside {
    background-color: #333744;
  }
  .hander {
    width: 100%;
    color: #fff;
    font-size: 25px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: cenrter;
    background-color: #333744;
  }
  .con {
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 40px;
  }
  .left-span {
    display: flex;
    align-items: center;
  }
}
</style>
