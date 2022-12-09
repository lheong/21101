<template>
  <div>
    <el-card class="box-card">
      <div>
        <div class="box-son">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
          <el-button type="primary" class="adduser" @click="dialogVisible = true">添加商品</el-button>
        </div>
        <!-- 表格 -->
        <el-table :data="tableData.slice((pagenum - 1) * pagesize, pagenum * pagesize)" style="width: 100%" border>
          <el-table-column header-align="center" label="#" type="index"> </el-table-column>
          <el-table-column header-align="center" prop="goods_name" label="商品名称" width="500"> </el-table-column>
          <el-table-column header-align="center" prop="goods_price" label="商品价格(元)" width="150"> </el-table-column>
          <el-table-column header-align="center" prop="goods_weight" label="商品重量" width="150"> </el-table-column>
          <el-table-column header-align="center" prop="add_time" label="创建时间" width="200">
             <template slot-scope="scope">
              {{ new Date(scope.row.add_time * 1000).toLocaleString() }}
            </template>
          </el-table-column>
          <el-table-column header-align="center" prop="name" label="操作" width="200">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit"></el-button>
              <el-button type="danger" icon="el-icon-delete" @click="del(scope.$index)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
      </div>
    </el-card>

    <!-- 对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%">
      <!-- 添加的表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
      <!-- 添加的表单 -->
    </el-dialog>
    <!-- 对话框 -->


    <!-- 分页 -->
    <div class="block">
      <!-- <span class="demonstration">完整功能</span> -->
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
    <!-- 分页 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: "",
      tableData: [],
      tableDatas: [],
      users: [],
      dialogVisible: false,
      dialogVisiblee: false,
      ruleForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 3, message: "长度在 3 到 16个字符", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 3, message: "长度在 11 个字符", trigger: "blur" }
        ]
      },
      index: null,
      options: ["1", "2", "3", "4", "5", "6"],
      value: "",
      pagenum: 1,
      pagesize: 5
    }
  },
  methods: {
    getuser() {
      this.$http({ method: "get", url: "/api/goods" }).then((res) => {
        console.log(res)
        this.tableData = res.data.data.goods
        this.tableDatas = JSON.stringify(res.data.data.goods)
      })
    },
    submitForm(ruleForm) {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.tableData.push({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            email: this.ruleForm.email,
            mobile: this.ruleForm.mobile
          })
          this.dialogVisible = false
          this.$message({
            message: "恭喜你，添加成功！",
            type: "success"
          })
          this.ruleForm = {
            username: "",
            password: "",
            mobile: "",
            email: ""
          }
        }
      })
    },

    del(i) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(i, 1)
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
      //
    },
    //搜索
    search() {
      let arr = JSON.parse(this.tableDatas)
      this.tableData = arr.filter((item) => item.goods_name.includes(this.input3))
    },
    //分页
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.pagenum = val
    }
  },
  created() {
    this.getuser()
  }
}
</script>

<style lang="scss" scoped>
.fenpei {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.box-card {
  margin-top: 30px;
}
.box-son {
  display: flex;
  width: 500px;
  margin-bottom: 30px;
}
.adduser {
  margin-left: 20px;
}
.xiala {
  margin-left: 10px;
}
.p {
  margin-bottom: 10px;
}
</style>
