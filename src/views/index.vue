<template>
  <div class="temo2">
    <div class="tap">学员管理</div>
    <div class="content">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学生状态">
          <el-select v-model="formInline.user" placeholder="请选择">
            <el-option label="禁用" :value="0"></el-option>
            <el-option label="启用" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学生名称">
          <el-input
            v-model="formInline.name"
            placeholder="请输入学生关键字"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="formInline.del"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" @click="submit">搜索</el-button>
          <el-button icon="el-icon-refresh-left" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button type="primary">新增学员</el-button
        ><el-button type="primary">批量导入</el-button
        ><el-button type="primary">批量导出</el-button
        ><el-button type="primary">查看报表</el-button>
      </div>
      <template>
        <el-table
          :data="tableData.slice((pagenum - 1) * pagesize, pagenum * pagesize)"
          border
          align="center"
          stripe
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="学生名称">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" alt="" />
              <span>{{ scope.row.nickname }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="mobile" label="手机号">
          </el-table-column>
          <el-table-column align="center" label="状态">
            <template slot-scope="scope">
              {{ scope.row.status === 0 ? "禁用" : "启用" }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="创建时间">
            <template slot-scope="scope">
              {{ new Date(scope.row.created_at * 1000).toLocaleString() }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small">详情-</el-button>
              <el-button type="text" size="small">编辑-</el-button>
              <el-button type="text" size="small">禁用-</el-button>
              <el-button type="text" size="small">删除-</el-button>
              <el-button type="text" size="small">重置密码</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "temo2",
  components: {},
  data() {
    return {
      // 输入框
      formInline: {
        // 状态
        user: "",
        // 姓名
        name: "",
        // 电话
        del: "",
      },
      // 表格
      tableData: [],
      list: "", //搜索备用原数据
      pagenum: 1, //第一页
      pagesize: 5, //显示5条数据
    };
  },
  created() {
    // 获取到数据
    this.getList();
    // let arr = [1, 2, 3, 4, 5, 6];
    // arr.forEach((item, i) => {
    //   console.log(item, i);
    // });
    // console.log(arr.slice(0, 4));
    // slice 从下标第0个开始到下标第4个结束 不截取下标为4的数据 截取出返回新数组

    // let data = new Date();
    // let w = data.toLocaleDateString();
    // console.log(data, w);
  },
  mounted() {},
  methods: {
    // 获取数据
    getList() {
      axios.get("list.json").then((res) => {
        // console.log(res);
        this.tableData = res.data;
        // JSON.stringify 转为JSON对象数据
        this.list = JSON.stringify(res.data);
      });
    },
    // 搜索
    submit() {
      // JSON.parse(this.list)  将JSON对象转为js对象
      let arr = JSON.parse(this.list);
      //用 filter 方法过滤数据 用 includer 判断指定向里面是否包含相同数据 实现模糊搜索
      this.tableData = arr.filter((item) => {
        if (
          item.nickname.includes(this.formInline.name) &&
          item.mobile.includes(this.formInline.del)
        ) {
          return item;
        }
      });

      if (this.formInline.user !== "") {
        this.tableData = this.tableData.filter((item) => {
          return item.status === this.formInline.user;
        });
      }
    },
    // 重置
    reset() {
      this.formInline = {
        uesr: "",
        name: "",
        del: "",
      };
      this.getList();
    },
    // 分页
    // 每页条数发生变化时触发逻辑
    handleSizeChange(val) {
      this.pagesize = val;
    },
    // 当前页码发生变化时触发逻辑
    handleCurrentChange(val) {
      this.pagenum = val;
    },
  },
};
</script>
<style scoped lang="scss">
.temo2 {
  width: 100%;
  height: 100%;
}
.tap {
  width: 100%;
  line-height: 30px;
  border-bottom: 1px solid #000;
  padding-left: 10px;
  box-sizing: border-box;
}
img {
  width: 20px;
  height: 20px;
}
.content {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
