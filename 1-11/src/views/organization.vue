<template>
	<div class="oragn">
		<el-card>
			<div></div>

			<el-button type="primary" @click="dialogFormVisible = true">新增角色</el-button>
			<el-table :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }" :data="list" border
				style="width: 100% ;">
				<el-table-column center type="index" label="序号" width="100" />
				<el-table-column prop="name" label="名称" />
				<el-table-column prop="description" label="描述" />
				<el-table-column prop="username" label="操作">
					<el-button type="success" size="small">分配权限</el-button>
					<el-button type="primary" size="small">编辑</el-button>
					<el-button type="danger" size="small" @click="del(index)">删除</el-button>
				</el-table-column>
			</el-table>
		</el-card>
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
export default {
	name: "",
	data () {
		return {
			list: [
				{ "id": "604e2aeb488be61b90b68776", "name": "系统管理员", "description": "管理整合平台，可以操作企业所有功能" },
				{ "id": "604e2b03488be61b90b68777", "name": "人事经理", "description": "负责整合人事部门" },
				{ "id": "604e2b12488be61b90b68779", "name": "人事专员", "description": "只能操作员工菜单" },
				{ "id": "604e2b19488be61b90b6877a", "name": "薪资专员", "description": "绩效管理" },
				{ "id": "604e2b25488be61b90b6877b", "name": "员工", "description": "员工" },
				{ "id": "63beaa9e81b4da1595e82e23", "name": "211221", "description": "22121" },
				{ "id": "63beab8e81b4da1595e82e29", "name": "ewg ", "description": "ewg " },
				{ "id": "63beac3d81b4da1595e82e30", "name": "1", "description": "1" },
				{ "id": "63beac3f81b4da1595e82e32", "name": "1", "description": "1" }
			],
			dialogFormVisible: false,
			form: {
				name: '',
				description: ''
			},
			formLabelWidth: '120px'
		}
	},
	methods: {
		del (index) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.list.splice(index, 1);
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		},
		add () {
			if (this.form.name == '' || this.form.description == '') {
				this.$message.error('请输入内容');
			} else {
				console.log(this.form);
				this.list.push({ ...this.form })
				this.dialogFormVisible = false
			}

		}
	},
	created () { }
}
</script>

<style lang="scss" scoped>
.oragn {
	padding: 15px;
}

.el-button {
	margin-bottom: 10px;
}
</style>
