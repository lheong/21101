<template>
  <div>
    <!-- 模板字符串、 插值表达式 -->
    <!-- <h1>{{ msg }}</h1> -->

    <!-- <p v-bind:title="mssage">鼠标暂停几秒查看提示信息</p>
    <p :title="mssage">鼠标暂停几秒查看提示信息</p> -->

    <!-- <button v-on:click="flag = !flag">状态切换</button>
    <p v-if="flag">111</p>
    <p v-show="flag">222</p> -->

    <!-- <button @click="revise">修改</button>
    <p v-for="(item, index) in list" :key="index">{{ item.name }}</p> -->

    <input type="text" @input="handelInput" />
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      value: "",
      msg: "我想睡觉",
      mssage: "页面加载于" + new Date().toLocaleString(),
      flag: false,

      list: [
        {
          id: 1,
          name: "zs",
        },
        {
          id: 2,
          name: "ls",
        },
        {
          id: 3,
          name: "wu",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    revise() {
      this.list[0].name = "hhhh";
    },
    handelInput(e) {
      this.value = e.target.value;
      console.log(e);
    },
  },
};
</script>
<style scoped lang="scss"></style>
