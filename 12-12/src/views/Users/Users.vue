<template>
	<div class="users">
		<el-form :inline="true">
			<el-form-item>
				<el-input style="width: 200px;" placeholder="请输入内容" v-model="params.query" class="input-with-select">
					<el-button slot="append" icon="el-icon-search" @click="search"></el-button>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="addUsers">添加用户</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="list" border style="width: 90%">
			<el-table-column type="index" label="#">
			</el-table-column>
			<el-table-column prop="username" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="email" label="邮箱" width="180">
			</el-table-column>
			<el-table-column prop="mobile" label="电话">
			</el-table-column>
			<el-table-column prop="role_name" label="角色">
			</el-table-column>
			<el-table-column prop="mg_state" label="状态">
				<template slot-scope="scope">
					<el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ccc">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" size="mini" icon="el-icon-edit"
						@click="handleEdit(scope.row)"></el-button>
					<el-button type="danger" size="mini" icon="el-icon-delete"
						@click="handleDelete(scope.row.id)"></el-button>
					<el-button type="warning" size="mini" icon="el-icon-s-tools"
						@click="handleAssign(scope.row)"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[2, 3, 5, 10]"
			:page-size="2" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>

		<!-- 添加修改对话框 -->
		<AddUsersVue ref="addusers" @add="add" @edit="edit" />
		<!-- 分配角色对话框 -->
		<AssignRolesVue ref="assign" @updateAss="updateAss" />
	</div>
</template>

<script>
import AddUsersVue from './AddUsers.vue';
import AssignRolesVue from './AssignRoles.vue';
import { GetUser, GetSearchUser, SetUser, UpdateUser, DelUser, UpdateUserAss } from '@/API/httpApi'
export default {
	data() {
		return {
			/**存放数据 */
			list: [],
			lists: [],
			params: {
				query: "",
				pagenum: 1,
				pagesize: 2
			},
			/**总条数 */
			total: 0,
		}
	},
	methods: {
		/**搜索 */
		search() {
			GetSearchUser(this.params).then(res => {
				const { data, meta } = res.data
				if (meta.status === 200) {
					this.list = data.users
					this.$message.success(meta.msg)
				} else {
					this.$message.error(meta.msg)
				}
			})
		},
		getlist() {
			GetUser(this.params).then(res => {
				const { data, meta } = res.data
				if (meta.status === 200) {
					this.total = data.total
					this.list = data.users
					// this.$message.success(meta.msg)
				} else {
					// this.$message.error(meta.msg)
				}

			})

		},
		/**添加用户 */
		addUsers() {
			this.$refs.addusers.popDisplay()
		},
		/**添加 */
		add(obj) {
			SetUser(obj).then(() => { })
			this.getlist()
			this.lists.push({ ...obj, id: new Date().getTime() })
		},
		/**编辑回填 */
		handleEdit(obj) {
			this.$refs.addusers.htbackfill(obj)
		},
		/**删除用户 */
		handleDelete(id) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
				/**删除接口 */
				DelUser(id).then(() => { })
				this.lists = this.lists.filter(item => item.id != id)
				this.getlist()
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});

		}
		,
		/**编辑 */
		edit(obj) {
			UpdateUser({ ...obj }).then(() => { })
			this.lists.forEach(item => {
				if (item.id == obj.id) {
					item.mobile = obj.mobile
					item.email = obj.email
				}
			})
		},
		/**每页几条数据 */
		handleSizeChange(val) {

			this.params.pagesize = val
			this.getlist()
		},
		/**当前第几页 */
		handleCurrentChange(val) {

			this.params.pagenum = val
			this.getlist()
		},
		/**分配角色 */
		handleAssign(obj) {
			this.$refs.assign.open(obj)
		},
		/**更新用户角色 */
		updateAss(obj) {
			UpdateUserAss(obj).then(() => { })
		}

	},
	created() {
		/**进入页面获取列表 */
		this.getlist()

	},
	mounted() {

	},
	components: {
		AddUsersVue,
		AssignRolesVue

	},
	computed: {

	},
	watch: {
		dialogTableVisible(newValue) {
			if (!newValue) {
				this.ruleForm = {}
				this.id = -1
			}
		},
		lists: {
			deep: true,
			handler(newValue) {
				this.list = newValue
			}
		}

	},
}
</script>

<style lang='scss' scoped>
.users {
	width: 100%;
	// height: 100%;
	background: #fff;
	margin: 20px;
	padding: 20px;
}
</style>
