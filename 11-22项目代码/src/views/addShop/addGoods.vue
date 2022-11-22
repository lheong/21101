<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="食品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="食品活动" prop="dpdz">
        <el-input v-model="ruleForm.dpdz"></el-input>
      </el-form-item>
      <el-form-item label="食品详情" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="上传食品图片">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="食品特点">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="食品规格">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="单规格"></el-radio>
          <el-radio label="多规格"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="包装费">
        <el-input-number
          v-model="ruleForm.num"
          @change="handleChange"
          :min="1"
          label="描述文字"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="多规格">
        <el-input-number
          v-model="ruleForm.num1"
          @change="handleChange"
          :min="1"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        xxdz: "",
        phone: "",
        dpjs: "",
        dpby: "",
        delivery: true,
        delivery2: true,
        delivery3: true,
        delivery4: true,
        delivery5: true,
        delivery6: true,
        num: 1,
        num1: 1,
        date1: "",
        date2: "",
        region: "",
        resource: "",
      },
      rules: {
        name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
        dpdz: [{ required: true, message: "请输入详细地址", trigger: "blur" }],
        phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
      },
      options: [],
      imageUrl: "",
      tableDataa: [],
    };
  },
  methods: {
    submitForm() {},
    handleChange() {},
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.aa {
  display: flex;
  flex-wrap: wrap;
}
</style>
