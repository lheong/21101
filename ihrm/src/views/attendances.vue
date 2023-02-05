<template>
  <div class="temo">
    <div class="top">
      <div class="top_left">
        <el-alert
          title="有0条考勤审批尚未处理"
          type="info"
          :closable="false"
          show-icon
        >
        </el-alert>
      </div>
      <div>
        <el-button type="danger">导入</el-button>
        <el-button type="warning">提醒</el-button>
        <el-button type="primary">设置</el-button>
        <el-button>历史归档</el-button>
        <el-button type="primary">202002报表</el-button>
      </div>
    </div>
    <div class="center">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="部门">
          <el-checkbox-group v-model="form.type">
            <el-checkbox
              v-for="(item, index) in this.name"
              :key="index"
              :label="item.name"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="考勤状态">
          <el-radio-group v-model="form.resource">
            <el-radio label="正常"></el-radio>
            <el-radio label="旷工"></el-radio>
            <el-radio label="事假"></el-radio>
            <el-radio label="调休"></el-radio>
            <el-radio label="迟到"></el-radio>
            <el-radio label="早退"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align="center" width="80" type="index" label="序号">
        </el-table-column>
        <el-table-column align="center" prop="username" label="姓名">
        </el-table-column>
        <el-table-column align="center" prop="workNumber" label="工号">
        </el-table-column>
        <el-table-column align="center" prop="departmentName" label="部门">
        </el-table-column>
        <el-table-column align="center" prop="mobile" label="手机">
        </el-table-column>
        <el-table-column align="center" label="3/1"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/2"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/3"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/4"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/5"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/6"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/7"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/8"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/9"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/10"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/11"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/12"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/13"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/14"> 旷工 </el-table-column>
        <el-table-column align="center" label="3/15"> 旷工 </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { attendan, attendances } from '../untils/api/attendances.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      form: {
        type: [],
        resource: ''
      },
      tableData: [],
      name: [],
      lists: {
        page: 1,
        pageSize: 30,
        total: 24
      }
    }
  },
  created() {
    attendan().then((res) => {
      // console.log(res)
      this.name = res.data.data.depts
    })
    attendances().then((res) => {
      console.log(res)
      this.tableData = res.data.data.data.rows
    })
  },
  mounted() {},
  methods: {}
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
.center {
  background-color: #fff;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
