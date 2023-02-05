<!-- 组织架构 -->
<template>
  <div class="departments">
    <el-card>
      <el-tree :data="list" :props="defaultProps" @node-click="handleNodeClick">
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ data.name }}</span>
          <!-- <div> -->
          <span style="float: right"
            >{{ data.manager }}
            <el-dropdown @command="addDepartment">
              <span class="el-dropdown-link">
                操作<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="data.id + '添'"
                  >添加子部门</el-dropdown-item
                >
                <el-dropdown-item :command="data.id + '编'"
                  >编辑部门</el-dropdown-item
                >
                <el-dropdown-item :command="data.id + '删'"
                  >删除部门</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <!-- </div> -->
        </div>
      </el-tree>
    </el-card>

    <el-dialog title="新增部门" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="1-50个字符"></el-input>
        </el-form-item>
        <el-form-item label="部门编码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="1-50个字符"></el-input>
        </el-form-item>
        <el-form-item label="部门负责人" prop="manager">
          <el-select v-model="ruleForm.manager" placeholder="请选择活动区域">
            <el-option
              v-for="(item, index) in userList"
              :key="index"
              :label="item.username"
              :value="item.username"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍" prop="introduce">
          <el-input
            type="textarea"
            v-model="ruleForm.introduce"
            placeholder="1-300个字符"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确定</el-button
          >
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  getDepartment,
  getUser,
  addDepartment,
  editDepartment,
  getBackfill,
  deleteDepartment
} from '../untils/api/departments'
import { toTree } from '../untils/http/tree'

export default {
  data() {
    return {
      list: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      ruleForm: {
        name: '',
        code: '',
        manager: '',
        introduce: ''
      },
      rules: {
        name: [
          { required: true, message: '部门名称不能为空', trigger: 'blur' },
          {
            min: 1,
            max: 50,
            message: '长度在 1 到 50 个字符',
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '部门编码不能为空', trigger: 'blur' },
          {
            min: 1,
            max: 50,
            message: '长度在 1 到 50 个字符',
            trigger: 'blur'
          }
        ],
        manager: [
          { required: true, message: '部门负责人不能为空', trigger: 'change' }
        ],
        introduce: [
          { required: true, message: '部门介绍不能为空', trigger: 'blur' }
        ]
      },
      dialogFormVisible: false,
      pid: -1,
      userList: [],
      exidId: -1
    }
  },
  methods: {
    getList() {
      getDepartment().then((res) => {
        console.log(toTree(res.data.data.depts))
        this.list = toTree(res.data.data.depts)
      })
    },
    handleNodeClick(data) {
      console.log(data)
    },
    addDepartment(id) {
      getUser().then((res) => {
        console.log(res), (this.userList = res.data.data)
      })
      if (id.indexOf('添') != -1) {
        this.pid = id.replace('添', '')
        this.exidId = -1
        // console.log(a.command, 1)
        this.ruleForm = {}
        this.dialogFormVisible = true
      } else if (id.indexOf('编') != -1) {
        this.dialogFormVisible = true
        this.exidId = id.replace('编', '')
        getBackfill(this.exidId).then((res) => {
          console.log(res)
          this.ruleForm = res.data.data
        })
      } else if (id.indexOf('删') != -1) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            deleteDepartment(id.replace('删', '')).then((res) => {
              console.log(res)
              if (res.status == 200) {
                this.$message({
                  type: 'success',
                  message: res.data.message
                })
                this.getList()
              }
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.exidId == -1) {
            addDepartment({
              ...this.ruleForm,
              createTime: new Date(),
              pid: this.pid
            }).then((res) => {
              console.log(res)
              this.getList()
              this.dialogFormVisible = false
            })
          } else {
            editDepartment({ ...this.ruleForm }).then((res) => {
              console.log(res)
              this.getList()
              this.dialogFormVisible = false
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
::v-deep .custom-tree-node {
  width: 100%;
  // margin-top: 3px
}
</style>
