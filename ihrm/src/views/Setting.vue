<template>
  <div class="oragn">
    <template>
      <el-tabs v-model="activeName">
        <el-tab-pane label="角色管理" name="first"
          ><el-card>
            <el-button type="primary" @click="dialogFormVisible = true"
              >新增角色</el-button
            >
            <el-table
              :header-cell-style="{ textAlign: 'center' }"
              :cell-style="{ textAlign: 'center' }"
              :data="list"
              border
              style="width: 100%"
            >
              <el-table-column center type="index" label="序号" width="100" />
              <el-table-column prop="name" label="名称" />
              <el-table-column prop="description" label="描述" />
              <el-table-column prop="username" label="操作">
                <template slot-scope="scope">
                  <el-button type="success" size="small">分配权限</el-button>
                  <el-button type="primary" size="small">编辑</el-button>
                  <el-button
                    type="danger"
                    size="small"
                    @click="del(scope.$index, scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-card></el-tab-pane
        >
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新、将使得公司资料被重新审核，请谨慎修改 "
            type="info"
            :closable="false"
            show-icon
          >
          </el-alert>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司名称">
              <el-input
                disabled
                placeholder="江苏传智播客教育科技股份有限公司"
              ></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input
                disabled
                placeholder="北京市昌平区建材城西路金燕龙办公楼一层"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input disabled placeholder="bd@itcatcn"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                disabled
                type="textarea"
                rows="4"
                cols="27"
                name="s1"
                placeholder="传智播客官网-好口碑IT培训机构，一样的教育，不一样的品质"
              >
              </el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </template>
    <!-- 对话框 -->
    <el-dialog title="编辑弹层" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 列表接口
import { setting } from '../untils/api/setting.js'
export default {
  name: '',
  data() {
    return {
      activeName: 'first',
      list: [],
      dialogFormVisible: false,
      form: {
        name: '',
        description: ''
      },
      formLabelWidth: '120px',
      parm: {
        page: 1,
        pagesize: 20,
        total: 0
      }
    }
  },
  created() {
    this.getSetting()
  },
  methods: {
    getSetting() {
      setting(this.parm).then((res) => {
        console.log(res)
        this.list = res.data.data.rows
      })
    },
    del(index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.list.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    add() {
      if (this.form.name == '' || this.form.description == '') {
        this.$message.error('请输入内容')
      } else {
        console.log(this.form)
        this.list.push({ ...this.form })
        this.dialogFormVisible = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.oragn {
  padding: 15px;
  background-color: #fff;
}

.el-button {
  margin-bottom: 10px;
}
.el-alert {
  margin-bottom: 20px;
}
.el-input {
  width: 500px;
}
</style>
