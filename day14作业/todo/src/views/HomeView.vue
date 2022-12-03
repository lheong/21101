<template>
  <div class="temo">
    <el-button type="primary" @click="add">新增todolist</el-button>

    <el-calendar>
      <template slot="dateCell" slot-scope="{ date, data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template>
    </el-calendar>

    <el-dialog title="添加事件" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="事件名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="代办事项时间" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input
              placeholder="请选择日期"
              suffix-icon="el-icon-date"
              size="medium"
              v-model="form.date"
            >
            </el-input>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              size="medium"
              v-model="form.search"
            >
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="事件状态" :label-width="formLabelWidth">
          <el-radio-group v-model="form.resource">
            <el-radio label="代办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        date: "",
        search: "",
        resource: "",
      },
      formLabelWidth: "100px",
    };
  },
  created() {},
  mounted() {},
  methods: {
    add() {
      this.dialogFormVisible = true;
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
</style>
