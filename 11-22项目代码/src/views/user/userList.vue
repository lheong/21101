<template>
  <div class="temo">
    <template>
      <el-table :data="listData" style="width: 100%">
        <el-table-column type="index" label="#" width="80"> </el-table-column>
        <el-table-column prop="registe_time" label="注册日期">
        </el-table-column>
        <el-table-column prop="username" label="用户姓名"> </el-table-column>
        <el-table-column prop="city" label="注册地址"> </el-table-column>
      </el-table>
    </template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[20, 30, 60, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="69837"
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
      listData: [],
      pagenum: 1, //第几页
      pagesize: 20, //显示多少条数据
    };
  },
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    // 当前几页
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getList();
    },
    //每页几条
    handleSizeChange(val) {
      this.pagesize = val;
      this.getList();
    },
    // 请求数据
    getList() {
      axios
        .get(
          `https://elm.cangdu.org/v1/users/list?offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}`
        )
        .then((res) => {
          // console.log(res);
          this.listData = res.data;
        });
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
</style>
