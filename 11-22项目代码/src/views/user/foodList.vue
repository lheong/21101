<template>
  <div class="temo">
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="食品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="餐馆名称">
                <span>{{ props.row.rating_count }}</span>
              </el-form-item>
              <el-form-item label="食品 ID">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.restaurant_id }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="餐馆地址">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.category_id }}</span>
              </el-form-item>
              <el-form-item label="食品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="月售量">
                <span>{{ props.row.month_sales }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="食品名称" prop="name"> </el-table-column>
        <el-table-column label="食品介绍" prop="description"> </el-table-column>
        <el-table-column label="评分" prop="category_id"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
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
      :total="3212"
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
    this.gteList(); //进入页面调用数据
  },
  mounted() {},
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 获取数据
    gteList() {
      axios
        .get(
          `https://elm.cangdu.org/shopping/v2/foods?offset=${
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
