<template>
  <div class="temo">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeNav"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu
            v-for="(item, index) in list"
            :key="index"
            :index="item.path"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="(ele, i) in item.children"
              :key="i"
              :index="ele.path"
              >{{ ele.name }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="box">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item
              v-for="(item, index) in $route.meta.title"
              :key="index"
              >{{ item }}</el-breadcrumb-item
            >
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
      activeNav: "",
      list: [
        {
          name: "数据管理",
          path: "/",
          children: [
            {
              name: "用户列表",
              path: "/userList",
            },
            {
              name: "商家列表",
              path: "/shopList",
            },
            {
              name: "食品列表",
              path: "/foodList",
            },
            {
              name: "订单列表",
              path: "/orderList",
            },
            {
              name: "管理员列表",
              path: "/adminList",
            },
          ],
        },
        {
          name: "添加数据",
          path: "/addGoods",
          children: [
            {
              name: "添加商铺",
              path: "/addShop",
            },
            {
              name: "添加商品",
              path: "/addGoods",
            },
          ],
        },
        {
          name: "图表",
          path: "/visitor",
          children: [
            {
              name: "用户分布",
              path: "/visitor",
            },
          ],
        },
        {
          name: "编辑",
          path: "/vueEdit",
          children: [
            {
              name: "文本编辑",
              path: "/vueEdit",
            },
          ],
        },
        {
          name: "设置",
          path: "/adminSet",
          children: [
            {
              name: "管理员设置",
              path: "/adminSet",
            },
          ],
        },
        {
          name: "说明",
          path: "/explain",
          children: [
            {
              name: "说明",
              path: "/explain",
            },
          ],
        },
      ],
    };
  },
  // 监听列表
  watch: {
    $route: {
      deep: true, //深度监听
      immediate: true, //一上来就监听
      handler(newVal) {
        // console.log(newVal);
        this.activeNav = newVal.path;
      },
    },
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
.box {
  width: 100%;
  height: 60px;
  background-color: #eff2f7;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  height: 100%;
}
.el-menu {
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; //取消滚动条
  }
}
.el-main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
