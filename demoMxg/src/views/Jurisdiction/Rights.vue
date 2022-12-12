<template>
	<div>
		<!-- <h1>权限列表</h1> -->
		<el-card class="box-card">
<el-table
    :data="rightslist"
    style="width: 100%">
    <el-table-column
      label="#"
      width="60"
			type="index">
    </el-table-column>
    <el-table-column
      label="权限名称"
			prop="authName">
    </el-table-column>
    <el-table-column
      label="路径"
			prop="path">
    </el-table-column>
    <el-table-column
      label="权限等级"
			prop="level">
			<template slot-scope="scope">
				<el-tag  v-show="scope.row.level==0" >一级</el-tag>
				<!-- <el-tag  v-show="scope.row.level==1, type="success" >二级</el-tag>
				<el-tag  v-show="scope.row.level==2,type="warning" >三级</el-tag> -->
			</template>
    </el-table-column>
  </el-table>

</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {
			rightslist:[]
		}
	},
	methods: {

	},
	created () {
this.$http.apiPost('/rights').then(res=>{
						console.log(res);
						this.rightslist=res.data.data
				})
	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
</style>
