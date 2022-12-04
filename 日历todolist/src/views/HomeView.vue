<template>
  <div class="temo">
    <el-button type="primary" @click="dialogFormVisible = true"
      >新增todolist</el-button
    >

    <el-calendar>
      <template slot="dateCell" slot-scope="{ date, data }">
        <div class="box">
          <p class="calendar" :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(2).join() }}
            <!-- {{ data.isSelected }} -->
          </p>
          <ul>
            <li
              v-for="(item, index) in $store.state.list"
              :key="index"
              @click="revise(item, index)"
            >
              <div
                class="over"
                v-if="item.date1 == data.day && item.resource == '待办'"
              >
                {{ item.name }}
              </div>
              <div
                class="done"
                v-if="item.date1 == data.day && item.resource == '已办'"
              >
                {{ item.name }}
              </div>
            </li>
          </ul>
        </div>
      </template>
    </el-calendar>

    <el-dialog
      :title="dateid == -1 ? '添加' : '编辑'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="事件名称">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="事项时间">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="事项状态">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="已办"></el-radio>
            <el-radio label="待办"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary" @click="add">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: "添加事件",
      dialogFormVisible: false,
      dateid: -1,
      ruleForm: {
        name: "",
        date1: "",
        resource: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 时间
    // get() {
    //   let date = new Date(this.ruleForm.date1);
    //   let year = date.getFullYear(); //年
    //   let moth = date.getMonth() + 1; //月
    //   moth = moth < 10 ? "0" + moth : moth;
    //   let dates = date.getDate(); //日
    //   dates = dates < 10 ? "0" + dates : dates;
    //   let time = year + "-" + moth + "-" + dates; //年月日
    //   this.ruleForm.date1 = time;
    // },

    get() {
      let str = this.ruleForm.date1
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .join("-");
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, "0");
        this.ruleForm.date1 = newtime;
      } else {
        this.ruleForm.date1 = str;
      }
    }, // 数字补0
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start);
    },

    add() {
      if (this.dateid == -1) {
        this.get();
        console.log(this.ruleForm);
        this.$store.commit("add", this.ruleForm);
        this.dialogFormVisible = false;
        console.log(1);
      } else {
        this.get();
        this.$store.commit("revise", {
          ...this.ruleForm,
          index: this.dateid,
        });
        this.dialogFormVisible = false;
        this.dateid = -1;
        console.log(2);
      }

      this.ruleForm.name = "";
      this.ruleForm.date1 = "";
      this.ruleForm.resource = "";
    },

    // 添加
    // add() {
    //   // 关闭模态框
    // },

    // 编辑
    revise(obj, i) {
      this.dialogFormVisible = true;
      this.dateid = i;
      console.log(obj);
      console.log(i);
      this.ruleForm.name = obj.name;
      this.ruleForm.date1 = obj.date1;
      this.ruleForm.resource = obj.resource;
    },
  },
};
</script>
<style scoped lang="scss">
.temo {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.is-selected {
  color: #1989fa;
}
.line {
  text-align: center;
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.calendar {
  display: inline-block;
}
ul {
  margin: 0;
  padding: 0;
  margin-top: 3px;
  overflow: auto;
}
.done {
  padding: 5px 10px;
  text-align: center;
  background-color: #66b1ff;
  color: #fff;
  margin-bottom: 5px;
  font-size: 14px;
}
.over {
  padding: 5px;
  text-align: center;
  background-color: #d00;
  color: #fff;
  margin-bottom: 5px;
  font-size: 14px;
}
</style>
