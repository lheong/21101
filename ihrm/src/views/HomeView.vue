<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse ? '63px' : '200px'">
        <img src="../assets/微信图片_20230105194248.png" alt="" />
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#5a8bff"
          active-text-color="#ffd04b"
          text-color="#ccc"
          :collapse="isCollapse"
          router
        >
          <el-menu-item
            v-for="(item, index) in list"
            :key="index"
            :index="item.router"
          >
            <i class="el-icon-eleme" style="color: #ccc"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="left">
            <div>
              <i
                @click="isCollapse = !isCollapse"
                v-if="isCollapse == true"
                class="el-icon-s-unfold"
              ></i>
              <i
                @click="isCollapse = !isCollapse"
                v-if="isCollapse == false"
                class="el-icon-s-fold"
              ></i>
              <span class="con">江苏传智播客教育科技股份有限公司</span>
              <span class="btn">体验版</span>
            </div>
            <div>
              <el-button type="info" @click="$router.push('/')">退出</el-button>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isCollapse: false,
      list: [
        { name: '首页', router: '/dashboard' },
        { name: '员工', router: '/employees' },
        { name: '公司设置', router: '/setting' },
        { name: '权限管理', router: '/permission' },
        { name: '社保', router: '/social_securitys' },
        { name: '审批', router: '/approvals' },
        { name: '考勤', router: '/attendances' },
        { name: '工资', router: '/salarys' },
        { name: '组织架构', router: '/departments' }
      ]
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.home {
  width: 100%;
  height: 100%;
}

.el-container {
  width: 100%;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #3d6df8;
  color: #333;
  line-height: 60px;
  color: #fff;
}

.el-aside {
  background-color: #5a8bff;
  color: #333;
  height: 100vh;

  .el-menu {
    background-color: #5889fe;
    border-right: 0px;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100vh;
}

.left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    font-size: 25px;
    cursor: pointer;
  }

  .con {
    margin: 0 10px;
    font-size: 20px;
  }

  .btn {
    display: inline-block;
    background-color: #84a9fe;
    line-height: 16px;
    height: 30px;
    padding: 8px 10px 8px 10px;
    border-radius: 10px;
  }
}
</style>
