<template>
  <div class="temo">
    <div class="top">
      <div class="top_left">
        <el-alert
          title="本月：社保在缴 增员 减员 入职 离职"
          type="info"
          :closable="false"
          show-icon
        >
        </el-alert>
      </div>
      <div>
        <el-button type="danger">历史归档</el-button>
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
        <el-form-item label="社保城市">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="北京" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="公积金城市">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="北京" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </div>

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
        <el-table-column prop="mobile" label="手机" sortable> </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" sortable>
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" sortable>
        </el-table-column>
        <el-table-column prop="enableState" label="离职时间" sortable>
        </el-table-column>
        <el-table-column prop="providentFundCity" label="社保城市"> </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { company, list } from '../untils/api/social_securitys.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      form: {
        type: []
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
    company().then((res) => {
      this.name = res.data.data.depts
      console.log(res)
    })
    list(this.lits).then((res) => {
      console.log(res)
			this.tableData=res.data.data.rows
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
