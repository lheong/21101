<template>
	<div>
		<el-dialog :title="id==-1?'添加角色':'编辑角色'" :visible.sync="dialogVisible" width="40%">
			<el-form ref="ruleForm" class="adduser" :model="form" label-width="80" :rules="rules">
				<el-form-item label="角色名称" prop="roleName" style="display: flex;">
					<el-input v-model="form.roleName"></el-input>
				</el-form-item>
				<el-form-item label="角色描述" prop="roleDesc" style="display: flex;">
					<el-input v-model="form.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="resetForm('ruleForm')">取 消</el-button>
				<el-button type="primary" @click="addUser('ruleForm')">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialogVisible: false,
			form: {
				roleName: '',
				roleDesc: ''
			},
			rules: {
				roleName: [
					{ required: true, message: '请输入角色名称', trigger: 'blur' }
				],
				roleDesc: [
					{ required: true, message: '请输入角色描述', trigger: 'blur' }
				]
			},
			id: -1

		}
	},
	methods: {
		/**打开弹框 */
		open(obj) {
			this.dialogVisible = true
			if(!obj) return
			this.id = obj.id
			this.form = { ...obj }
		},

		/**关闭弹框 */
		cosle() {
			this.dialogVisible = false
		},
		/**添加角色 */
		addUser(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					/**判断是添加还是编辑 */
					if (this.id == -1) {
						/**添加接口 */
						this.$emit("addrolse", { ...this.form })
						this.form = {}
					} else {
						/**编辑接口 */
						this.$emit("edit", { ...this.form, id: this.id })
					}
					this.cosle()
				} else {
					return false;
				}
			});
		},
		/**清空表单 */
		resetForm(formName) {
			this.dialogVisible = false
			this.$refs[formName].resetFields();
			this.form = {}
		}

	},
	created() {

	},
	mounted() {

	},
	components: {

	},
	computed: {

	},
	watch: {
		/**弹框关闭状态恢复原样 */
		dialogVisible(newValue) {
			if (!newValue) {
				console.log(newValue);
				this.resetForm('ruleForm')
				this.id = -1
			}
		}

	},
}
</script>

<style lang='scss' scoped>

</style>
