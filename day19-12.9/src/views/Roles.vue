<template>
  <div>
 

    <el-card class="box-card">
      <div>
        <el-button type="primary" @click="dialogVisible = true">添加角色</el-button>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <!-- <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template> -->
        </el-table-column>
        <el-table-column header-align="center" type="index" label="#" prop="id"> </el-table-column>
        <el-table-column header-align="center" label="角色名称" prop="roleName"> </el-table-column>
        <el-table-column header-align="center" label="角色描述" prop="roleDesc"> </el-table-column>
        <el-table-column header-align="center" label="操作" width="300">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="bj(scope.$index)">编辑</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="del(scope.$index)">删除</el-button>
            <el-button type="warning" size="mini" icon="el-icon-setting" @click="dialogVisibleee = true"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </el-card>

    <!-- 对话框 -->
    <el-dialog title="添加角色" :visible.sync="dialogVisible" width="70%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 对话框 -->

    <!-- 编辑对话框 -->
    <!-- 对话框 -->
    <el-dialog title="修改角色" :visible.sync="dialogVisiblee" width="70%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editor">确定</el-button>
          <el-button @click="dialogVisiblee = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 对话框 -->
    <!-- 编辑对话框 -->

    <!-- 分配权限对话框 -->
    <!-- 对话框 -->
    <el-dialog title="分配权限" :visible.sync="dialogVisibleee" width="70%"> </el-dialog>
    <!-- 对话框 -->
    <!-- 分配权限对话框 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      dialogVisiblee: false,
      dialogVisibleee: false,
      ruleForm: {
        roleName: "",
        roleDesc: ""
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 2, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" },
          { min: 2, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      },
      index: null
    }
  },
  methods: {
    getroles() {
      this.$http({ method: "get", url: "/api/roles" }).then((res) => {
        console.log(res)
        this.tableData = res.data.data
        // this.tableDatas=this.tableData
      })
    },
    submitForm(ruleForm) {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.tableData.push({ roleName: this.ruleForm.roleName, roleDesc: this.ruleForm.roleDesc })
          this.dialogVisible = false
          this.$message({
            message: "恭喜你，添加成功！",
            type: "success"
          })
          this.ruleForm = {
            roleName: "",
            roleDesc: ""
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
      // this.pages()
    },
    bj(i) {
      //点击编辑
      this.index = i
      this.dialogVisiblee = true
      this.ruleForm = {
        ...this.tableData[this.index]
      }
    },
    editor() {
      //确认编辑
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$set(this.tableData, this.index, { ...this.ruleForm })
          this.dialogVisiblee = false
          this.$message({
            message: "恭喜你，修改成功！",
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
    }
  },
  created() {
    this.getroles()
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 30px;
}
</style>
