<template>
  <div>
    <el-dialog :title="id == -1 ? '添加用户' : '编辑'" :visible.sync="addShow">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" :disabled="id != -1"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="paw" v-if="id == -1">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
          <el-button type="primary" @click="add('ruleForm')">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**表单的显示与隐藏 */
      addShow: false,
      id: -1,
      /**表单数据 */
      ruleForm: {
        username: "",
        email: "",
        mobile: "",
        password: ""
      },
      /**表单的正则 */
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        paw: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入电话", trigger: "blur" }]
      }
    }
  },
  methods: {
    /**弹框显示 */
    popDisplay() {
      this.addShow = true
    },
    /**添加或编辑用户*/
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /**判断是添加还是编辑 */
          if (this.id == -1) {
            /**添加接口 */

            this.$emit("add", { ...this.ruleForm, id: new Date().getTime() })
          } else {
            /**编辑接口 */

            this.$emit("edit", { ...this.ruleForm, id: this.id })
          }
          this.resetForm("ruleForm")
        } else {
          return false
        }
      })
    },
    /**关闭清空表单*/
    resetForm(formName) {
      this.addShow = false
      this.$refs[formName].resetFields()
      this.ruleForm = {}
    },
    /**回填表单 */
    htbackfill(obj) {
      this.popDisplay()
      this.ruleForm = { ...obj }
      this.id = obj.id
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {
    addShow(newValue) {
      if (!newValue) {
        this.resetForm("ruleForm")
        this.id = -1
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
