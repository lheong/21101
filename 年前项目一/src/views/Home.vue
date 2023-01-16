<template>
  <div class='home'>
    <el-container>
      <el-aside width="200px">
        <img src="../assets/微信图片_20230105194248.png" alt="">
        <el-menu default-active="2" class="el-menu-vertical-demo" text-color="#fff" router>
          <el-menu-item index="/dashboard">
            <el-icon>
              <Location />
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/departments">
            <el-icon>
              <Printer />
            </el-icon>
            <span>组织架构</span>
          </el-menu-item>
          <el-menu-item index="/employees">
            <el-icon>
              <User />
            </el-icon>
            <span>员工</span>
          </el-menu-item>
          <el-menu-item index="/settings">
            <el-icon>
              <Setting />
            </el-icon>
            <span>公司设置</span>
          </el-menu-item>
          <el-menu-item index="/permissions">
            <el-icon>
              <setting />
            </el-icon>
            <span>权限设置</span>
          </el-menu-item>
          <el-menu-item index="/social">
            <el-icon>
              <Menu />
            </el-icon>
            <span>社保</span>
          </el-menu-item>
          <el-menu-item index="/attendances">
            <el-icon>
              <Collection />
            </el-icon>
            <span>考勤</span>
          </el-menu-item>
          <el-menu-item index="/salarys">
            <el-icon>
              <FirstAidKit />
            </el-icon>
            <span>工资</span>
          </el-menu-item>
          <el-menu-item index="/approvals">
            <el-icon>
              <CircleCheck />
            </el-icon>
            <span>审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-icon>
            <Operation />
          </el-icon>
          <span>江苏传智播客教育科技股份有限公司</span>
          <button class="btBox">体验版</button>
          <div class="box">
            <span class="ra">
              <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" /> -->
            </span>
            <span>退出</span>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Location, Printer, User, Setting, Operation, Menu, Collection, FirstAidKit, CircleCheck } from '@element-plus/icons-vue'
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
</script>

<style lang='scss' scoped>
.el-aside {
  background-color: #5889FE;
  height: 100vh;
  color: #fff;

  .el-menu {
    background-color: #5889FE;
  }
}

.el-header {
  background-color: #4C7CFB;
  line-height: 60px;
  color: #fff;

  .btBox {
    width: 60px;
    height: 30px;
    margin-left: 20px;
    border-radius: 10px;
    border: 1px solid #84A9FE;
    background-color: #84A9FE;
    color: #fff;
  }

  span {
    margin-left: 20px;
    font-size: 22px;
  }
}

.box {
  float: right;
  display: flex;
  align-items: center;
  height: 60px;
  line-height: 30px;
}
</style>
