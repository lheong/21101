<template>
  <div class="temo">
    <div class="topmost">
      <div><el-button type="primary">共16条记录</el-button></div>
      <div>
        <el-button type="danger">简单表头导出</el-button>
        <el-button type="info">复杂表头导出</el-button>
        <el-button type="success" @click="$router.push('/imports')"
          >excel导出</el-button
        >
        <el-button type="primary" disabled>新增员工</el-button>
      </div>
    </div>

    <div class="table">
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column prop="username" label="姓名" sortable>
          </el-table-column>
          <el-table-column label="头像">
            <template slot-scope="scope">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.staffPhoto"
              ></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="mobile" label="手机号" sortable>
          </el-table-column>
          <el-table-column prop="workNumber" label="工号" sortable>
          </el-table-column>
          <el-table-column prop="formOfEmployment" label="聘用形式" sortable>
            <template slot-scope="scope">
              {{ scope.row.formOfEmployment == falg ? '非正式' : '正式' }}
            </template>
          </el-table-column>
          <el-table-column prop="departmentName" label="部门" sortable>
          </el-table-column>
          <el-table-column prop="correctionTime" label="入职时间" sortable>
          </el-table-column>
          <el-table-column prop="enableState" label="账户状态" sortable>
            <template slot-scope="scope">
              <el-switch v-model="scope.row.enableState"> </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="230">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="$router.push('/chakan')">查看</el-button>
              <el-button size="mini" type="text">转正</el-button>
              <el-button size="mini" type="text">调岗</el-button>
              <el-button size="mini" type="text">离职</el-button>
              <el-button size="mini" type="text">角色</el-button>
              <el-button size="mini" type="text" disabled>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="list.page"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="list.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// 引入列表接口
import { role } from '../untils/api/lint.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      falg: 1,
      tableData: [],
      list: {
        page: 1,
        size: 40,
        total: 37
      }
    }
  },
  created() {
    this.getUrls()
  },
  mounted() {},
  methods: {
    getUrls() {
      role(this.list).then((res) => {
        this.tableData = res.data.data.rows
        console.log(res)
        console.log(this.tableData)
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.list.size = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.list.page = val
    }
  }
}
</script>
<style scoped lang="scss">
.temo {
  width: 100%;
  height: 100%;
}
.block {
  margin-top: 10px;
}
.topmost {
  height: 100px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table {
  margin-top: 10px;
}
</style>
