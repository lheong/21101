<template>
	<div class="roles">
		<el-button type="primary" @click="addUser">添加角色</el-button>
		<el-table :data="roles" border>
			<el-table-column width="55" type="expand">
				<template slot-scope="scope">
					<ul>
						<li class="first-leval" v-for="first in scope.row.children" :key="first.id">
							<div class="first-tag"><el-tag>{{ first.authName }} <span
										@click="deltree(scope.row.id, first.id)">×</span></el-tag></div>
							<ul class="second-ul">
								<li class="second-leval" v-for="second in first.children" :key="second.id">
									<div class="second-tag"><el-tag type="success">{{ second.authName }}<span
												@click="deltree(scope.row.id, second.id)">×</span></el-tag></div>
									<ul class="third-leval">
										<li v-for="third in second.children" :key="third.id">
											<div class="third-tag"><el-tag type="warning">{{ third.authName }} <span
														@click="deltree(scope.row.id, third.id)">×</span></el-tag></div>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</template>
			</el-table-column>
			<el-table-column label="#" type="index"></el-table-column>
			<el-table-column label="角色名称" prop="roleName"></el-table-column>
			<el-table-column label="角色描述" prop="roleDesc"></el-table-column>
			<el-table-column label="操作" width="400">
				<template slot-scope="scope">
					<el-button type="primary" icon="el-icon-edit" @click="exitRoles(scope.row)">编辑</el-button>
					<el-button type="danger" icon="el-icon-delete" @click="del(scope.row.id, scope.$index)">删除</el-button>
					<el-button type="warning" icon="el-icon-setting" @click="rights(scope.row)">分配权限</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 添加角色 -->
		<AddrolesVue ref="AddrolesVue" @addrolse="addrolse" @edit="edit" />
		<!-- 分配权限 -->
		<TreeRoles ref="TreeRoles" @Setrole="Setrole" />
	</div>
</template>
<script>
import { GetRoles, AddRoles, DelRoles, EditRoles, GetTree, SetRolse, DeleteRolse } from '@/API/httpApi'
import AddrolesVue from './Addroles.vue';
import TreeRoles from './TreeRoles.vue'
export default {
	components: {
		AddrolesVue,
		TreeRoles
	},
	data() {
		return {
			roles: [],
			isExit: false,
			/**当前角色id */
			roleId: -1
		};
	},
	created() {
		this.getlist()

	},
	methods: {
		/**获取列表数据 */
		getlist() {
			GetRoles().then(res => {
				console.log(res);
				let { data } = res.data
				this.roles = data
			})
		},
		addUser() {
			this.$refs.AddrolesVue.open()
		},
		/**添加用户接口 */
		addrolse(obj) {
			AddRoles(obj).then(() => { })
			this.getlist()
		},
		/**编辑角色 */
		exitRoles(obj) {
			this.$refs.AddrolesVue.open(obj)
		},
		/**删除角色 */
		del(id) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
				DelRoles(id).then(() => { })
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});


		},
		/**编辑接口 */
		edit(obj) {
			EditRoles(obj).then(() => { })
			this.getlist()
		},
		/**分配角色权限 */
		rights(item) {
			this.roleId = item.id
			GetTree().then(res => {
				let { data } = res.data
				console.log(data);
				this.$refs.TreeRoles.getTree(data)
			})
		},
		/**角色授权 */
		Setrole(arrID) {
			SetRolse({ roleId: this.roleId, rights: arrID }).then(() => {
				this.getlist()
			})
		},
		/**删除角色指定权限 */
		deltree(rolseId, rightId) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
				DeleteRolse({ roleId: rolseId, rightId: rightId }).then(() => { })
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});


		}
	}
}
</script>
<style lang="scss" scoped>
.roles {
	padding: 20px;
	margin: 20px;
	background: #fff;
}

ul {
	list-style: none !important;
	padding: 0;
	margin: 0;

	li {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.first-leval {
		width: 100%;
		height: 100%;
	}

	.first-tag {
		padding: 20px 50px;
		border: 1px solid #eee;
		flex-basis: 30%;
		height: 100%;
	}

	.second-ul {
		flex-basis: 70%;
	}

	.second-leval {
		min-width: 400px;
		padding: 20px 50px;
		border: 1px solid #eee;
	}

	.second-tag {
		margin-right: 50px;
	}

	.third-tag {
		padding: 20px 0;
		margin-right: 20px;
	}

	.third-leval {
		display: flex;
	}
}
</style>


