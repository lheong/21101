<template>
  <div class="temo">
    <div class="top">
      <div class="top_left">
        <el-alert
          title="当前审批中 0 本月审批通过1 本月审批驳回0"
          type="info"
          :closable="false"
          show-icon
        >
        </el-alert>
      </div>
      <div>
        <el-button type="primary">流程设置</el-button>
      </div>
    </div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" align="center" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="processName" label="审批类型" sortable>
        </el-table-column>
        <el-table-column prop="username" label="审选人" sortable>
        </el-table-column>
        <el-table-column
          prop="procCurrNodeUserName"
          label="当前审选人"
          sortable
        >
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="审批发起时间" sortable>
          <template slot-scope="scope">
            {{ new Date().toLocaleDateString(scope.row.timeOfEntry) }}
          </template>
        </el-table-column>
        <el-table-column prop="processState" label="审批状态" sortable>
          <template slot-scope="scope">
            {{
              scope.row.processState == 2
                ? '审批中'
                : scope.row.processState == 1
                ? '审批通过'
                : '撤销'
            }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { aapprovals } from '../untils/api/approvals.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      tableData: [],
      list: {
        page: 1,
        pageSize: 10,
        total: 0,
        year: 2018
      }
    }
  },
  created() {
    aapprovals(this.list).then((res) => {
      console.log(res)
      this.tableData = res.data.data.rows
    })
  },
  mounted() {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style scoped lang="scss">
.temo {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .top_left {
    width: 40%;
  }
}
</style>
