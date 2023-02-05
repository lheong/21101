<template>
  <div class="temo">
    <div class="top">
      <div class="top_left">
        <el-alert
          title="本月0: 入职0 离职0 调薪0 未定薪0"
          type="info"
          :closable="false"
          show-icon
        >
        </el-alert>
      </div>
      <div>
        <el-button type="danger">设置</el-button>
        <el-button type="primary">202002报表</el-button>
      </div>
    </div>
    <div class="center">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="聘用形式">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="正式" name="type"></el-checkbox>
            <el-checkbox label="非正式" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="员工状态">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="在职" name="type"></el-checkbox>
            <el-checkbox label="离职" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
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
      </el-form>
    </div>

    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" width="80" type="index" label="序号">
        </el-table-column>
        <el-table-column align="center" prop="username" label="姓名">
        </el-table-column>
        <el-table-column prop="mobile" label="手机"> </el-table-column>
        <el-table-column prop="workNumber" label="工号"> </el-table-column>
        <el-table-column prop="formOfEmployment" label="聘用形式">
          <template slot-scope="scope">
            {{ scope.row.formOfEmployment == 1 ? '未知' : '已知' }}
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门"> </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间">
          <template slot-scope="scope">
            {{ new Date(scope.row.timeOfEntry).toLocaleDateString() }}
          </template>
        </el-table-column>
        <el-table-column prop="currentBasicSalary" label="工资基数">
        </el-table-column>
        <el-table-column prop="inServiceStatus" label="津贴方案">
          <template slot-scope="scope">
            {{ scope.row.inServiceStatus == 1 ? '通应方案' : '已知' }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small">调薪</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { attendan, salarys } from '../untils/api/attendances.js'
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
        approvalsStateChecks: [],
        approvalsTypeChecks: [],
        departmentChecks: [],
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created() {

    attendan().then((res) => {
      // console.log(res)
      this.name = res.data.data.depts
    })
    salarys(this.lists).then((res) => {
      // console.log(res)
      this.tableData = res.data.data.rows
    })
	console.log(new Date().toLocaleDateString());
  },
  mounted() {},
  methods: {
    handleClick(row) {
      console.log(row)
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
.center {
  background-color: #fff;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
