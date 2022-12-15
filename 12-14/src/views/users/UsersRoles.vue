<template>
  <div>
    <el-dialog title="分配角色" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="当前的用户:" :label-width="formLabelWidth">
          {{ form.username }}
        </el-form-item>
        <el-form-item label="当前的角色:" :label-width="formLabelWidth">
          {{ form.role_name }}
        </el-form-item>
        <el-form-item label="分配新角色:" :label-width="formLabelWidth">
          <el-select v-model="form.rid" placeholder="请选择">
            <el-option v-for="item in roleNameList" :key="item.id" :label="item.roleName" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-button>取消</el-button>
        <el-button type="primary" @click="updateAss">确定</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { GetRoles } from "@/API/httpApi"
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "120px",
      roleNameList: []
    }
  },
  methods: {
    /**打开对话框 */
    open(obj) {
      GetRoles().then((res) => {
        let { data } = res.data
        console.log(data)
        this.roleNameList = data
      })
      this.dialogFormVisible = true
      this.form = { ...obj }
    },
    /**关闭对话框 */
    close() {
      this.dialogFormVisible = false
    },
    /**更新用户角色 */
    updateAss() {
      this.$emit("updateAss", { id: this.form.id, rid: this.form.rid })
      this.close()
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
