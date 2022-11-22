<template>
  <div>
    <!-- 添加表单 -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="dpdz">
        <el-input v-model="ruleForm.dpdz"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="店铺介绍" prop="dpjs">
        <el-input v-model="ruleForm.dpjs"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语" prop="dpby">
        <el-input v-model="ruleForm.dpby"></el-input>
      </el-form-item>
      <el-form-item label="食品分类" prop="category">
        <el-cascader
          :options="options"
          :show-all-levels="false"
          v-model="ruleForm.category"
        ></el-cascader>
      </el-form-item>

      <el-form-item label="店铺特征">
        <div class="aa">
          <el-form-item label="品牌保证">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="蜂鸟专送">
            <el-switch v-model="ruleForm.delivery2"></el-switch>
          </el-form-item>
          <el-form-item label="新店开铺">
            <el-switch v-model="ruleForm.delivery3"></el-switch>
          </el-form-item>
          <el-form-item label="外卖保">
            <el-switch v-model="ruleForm.delivery4"></el-switch>
          </el-form-item>
          <el-form-item label="准时达">
            <el-switch v-model="ruleForm.delivery5"></el-switch>
          </el-form-item>
          <el-form-item label="开发票">
            <el-switch v-model="ruleForm.delivery6"></el-switch>
          </el-form-item>
        </div>
      </el-form-item>

      <el-form-item label="派送费">
        <el-input-number
          v-model="ruleForm.num"
          @change="handleChange"
          :min="1"
          label="描述文字"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="起步价">
        <el-input-number
          v-model="ruleForm.num1"
          @change="handleChange"
          :min="1"
          label="描述文字"
        ></el-input-number>
      </el-form-item>

      <!-- 营业时间 -->
      <el-form-item label="营业时间">
        <el-col :span="11">
          <el-time-picker
            placeholder="起始时间"
            v-model="ruleForm.date1"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="结束时间"
            v-model="ruleForm.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <!-- 营业时间 -->

      <!-- 上传图片 -->
      <el-form-item label="上传店铺头像">
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

      <el-form-item label="上传营业执照">
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

      <el-form-item label="上传餐饮服务许可证">
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
      <!-- 上传图片 -->

      <!-- 优惠活动 -->
      <el-form-item label="优惠活动">
        <el-select v-model="ruleForm.region" placeholder="满减优惠">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <!-- 优惠活动 -->

      <!-- 表格 -->
      <template>
        <el-table :data="tableDataa" style="width: 100%">
          <el-table-column prop="date" label="规格"> </el-table-column>
          <el-table-column prop="date" label="包装费"> </el-table-column>
          <el-table-column prop="date" label="价格"> </el-table-column>
          <el-table-column label="操作"> </el-table-column>
        </el-table>
      </template>
      <!-- 表格 -->

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 添加表单 -->
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
};
</script>

<style lang="scss" scoped>
.aa {
  display: flex;
  flex-wrap: wrap;
}
</style>
