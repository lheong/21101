<template>
  <div class="temo">
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{ props.row.recent_order_num }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店品名称" prop="name"> </el-table-column>
        <el-table-column label="店铺地址" prop="address"> </el-table-column>
        <el-table-column label="店铺介绍" prop="description"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button size="mini" @click="handleAdd">添加食品</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[20, 30, 60, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="3872"
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
    this.getList(); //进入页面调用数据
  },
  mounted() {},
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 添加
    handleAdd() {},
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 获取数据
    getList() {
      axios
        .get(
          `https://elm.cangdu.org/shopping/restaurants?latitude=35.747002&longitude=114.297447&offset=${
            this.pagenum * this.pagesize
          }&limit=${this.pagesize}`
        )
        .then((res) => {
          // console.log(res);
          this.tableData = res.data;
        });
    },

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
