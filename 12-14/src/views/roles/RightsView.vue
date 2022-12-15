<template>
	<div class="rights">
		<el-table :data="list" style="width: 100%" border>
			<el-table-column type="index">
			</el-table-column>
			<el-table-column prop="authName" label="权限名称">
			</el-table-column>
			<el-table-column prop="path" label="路径">
			</el-table-column>
			<el-table-column prop="level" label="权限等级">
				<template slot-scope="scope">
					<el-tag v-show="scope.row.level == 0">一级</el-tag>
					<el-tag type="success" v-show="scope.row.level == 1">二级</el-tag>

					<el-tag type="warning" v-show="scope.row.level == 2">三级</el-tag>
				</template>
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [],

		}
	},
	methods: {
		getlist() {
			this.$http.send("/rights", this.params).then(res => {
				console.log(res);
				this.list = res.data.data


			})
		}
	},
	created() {
		this.getlist()

	},
	mounted() {

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
.rights {
	padding: 20px;
	margin: 20px;
	background: #fff;
}
</style>
