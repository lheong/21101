<template>
  <div class="temo">
    <div class="top">
      <el-button type="primary">添加权限</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" align="center" label="名称">
      </el-table-column>
      <el-table-column prop="code" align="center" label="标识">
      </el-table-column>
      <el-table-column prop="description" align="center" label="描述">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="add(scope.$index, scope.row)"
            >添加</el-button
          >
          <el-button
            size="mini"
            type="text"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="text"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { permission } from '../untils/api/permission.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      tableData: []
    }
  },
  created() {
    permission().then((res) => {
			this.tableData = res.data.data
      console.log(res)
      console.log(this.tableData)
    })
  },
  mounted() {},
  methods: {
    add(index, row) {
      console.log(index, row)
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
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
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
