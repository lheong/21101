<template>
  <div class="temo">
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户名">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺名称">
                <span>{{ props.row.restaurant_name }}</span>
              </el-form-item>
              <el-form-item label="收货地址">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.address_id }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.description }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单ID" prop="id"> </el-table-column>
        <el-table-column label="总价格" prop="total_amount"> </el-table-column>
        <el-table-column label="订单状态" prop="status_bar.title"> </el-table-column>
      </el-table>
    </template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[20, 30, 60, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="32676"
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
          `https://elm.cangdu.org/bos/orders?offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}&restaurant_id=undefined`
        )
        .then((res) => {
          // console.log(res);
          this.tableData = res.data;
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
