<template>
  <div class="temo1">
    <h1>数据统计</h1>
    <ul>
      <li class="inc">当日数据:</li>
      <li>2新增用户</li>
      <li>1新增订单</li>
      <li>3新增管理员</li>
    </ul>
    <ul>
      <li class="ioc">总数据:</li>
      <li>69837 注册用户</li>
      <li>32676 订单</li>
      <li>124574 管理员</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
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
.temo1 {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 400;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
      width: 200px;
      height: 40px;
      background-color: #e5e9f2;
      margin: 10px;
      border-radius: 8px;
      text-align: center;
      line-height: 40px;
    }
    .inc {
      color: #ffffff;
      background-color: #ff9800;
    }
    .ioc {
      color: #ffffff;
      background-color: #20a0ff;
    }
  }
}
</style>
