<template>
  <div>

    <el-table :data="tableData" style="width: 100%" border :cell-style="{ textAlign: 'center' }">
      <el-table-column header-align="center" type="index" label="#"> </el-table-column>
      <el-table-column header-align="center" prop="authName" label="权限名称"> </el-table-column>
      <el-table-column header-align="center" prop="path" label="路径"> </el-table-column>
      <el-table-column header-align="center" prop="level" label="权限等级">
        <template slot-scope="scope">
          <el-tag :type="scope.row.level == '二级' ? 'success' : scope.row.level == '一级' ? '' : 'warning'">{{
            scope.row.level
          }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getlist() {
      this.$http({ method: "get", url: "/api/list" }).then((res) => {
        console.log(res)
        this.tableData = res.data.data
        // this.tableDatas=this.tableData
        // this.pages()
      })
    }
  },
  created() {
    this.getlist()
  }
}
</script>
