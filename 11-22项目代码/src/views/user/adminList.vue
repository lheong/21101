<template>
  <div class="temo">
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="姓名" prop="user_name"> </el-table-column>
        <el-table-column label="注册日期" prop="create_time"> </el-table-column>
        <el-table-column label="地址" prop="city"> </el-table-column>
        <el-table-column label="权限" prop="admin"> </el-table-column>
      </el-table>
    </template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[20, 30, 60, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="124574"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      tableData: [],
      pagenum: 1, //第几页
      pagesize: 20, //显示多少条数据
    };
  },
  created() {
    this.gteList();
  },
  mounted() {},
  methods: {
    gteList() {
      axios
        .get(
          `https://elm.cangdu.org/admin/all?offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}`
        )
        .then((res) => {
          // console.log(res);
          this.tableData = res.data.data;
        });
    },

    // 当前几页
    handleCurrentChange(val) {
      this.pagenum = val;
      this.gteList();
    },
    //每页几条
    handleSizeChange(val) {
      this.pagesize = val;
      this.gteList();
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
span {
  color: #333;
}
.demo-table-expand {
  font-size: 0;
  padding-left: 40px;
  box-sizing: border-box;

  background-color: #fbfdff;
}
.demo-table-expand label {
  width: 90px;
  color: #686f79;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
