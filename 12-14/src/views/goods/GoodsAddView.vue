<template>
  <div class="top">
    <el-steps :active="active" finish-status="success">
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <el-tabs tab-position="left" :before-leave="tabchange">
      <el-tab-pane label="基本信息">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商品名称" prop="goods_name">
            <el-input v-model="ruleForm.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="goods_price">
            <el-input v-model="ruleForm.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="goods_number">
            <el-input v-model="ruleForm.goods_number"></el-input>
          </el-form-item>
          <el-form-item label="商品重量" prop="goods_weight">
            <el-input v-model="ruleForm.goods_weight"></el-input>
          </el-form-item>
          <el-form-item label="商品选择">
            <el-cascader v-model="value" :options="catelist" :props="props"></el-cascader>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="商品参数">配置管理</el-tab-pane>
      <el-tab-pane label="商品属性">角色管理</el-tab-pane>
      <el-tab-pane label="商品图片">
        <el-upload
          class="upload-demo"
          action="http://175.27.228.178:3434/api/private/v1/upload"
          :on-success="postImg"
          list-type="picture"
          :headers="headers"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-tab-pane>
      <el-tab-pane label="商品内容">
        <quill-editor v-model="richText" ref="myQuillEditor" :options="editorOption"> </quill-editor>
      </el-tab-pane>
      <el-tab-pane label="完成">
        <el-button type="primary" @click="addgood">添加商品</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"
import { GetShopType, SetShopType } from "@/API/httpApi"
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      active: 1,
      ruleForm: {
        goods_name: "",
        goods_price: "",
        goods_number: "",
        goods_weight: ""
      },
      rules: {
        goods_name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        goods_price: [{ required: true, message: "请输入商品价格", trigger: "blur" }],
        goods_number: [{ required: true, message: "请输入商品数量", trigger: "blur" }],
        goods_weight: [{ required: true, message: "请输入商品重量", trigger: "blur" }]
      },
      headers: {},
      value: [],
      catelist: [],
      richText: "",
      editorOption: {},
      //富文本额配置可以为空
      props: {
        children: "children",
        label: "cat_name",
        value: "cat_id"
      }
    }
  },
  methods: {
    //重置
    resetForm() {
      this.ruleForm = {}
      this.value = ""
    },
    /**获取商品选择数据*/
    getcate() {
      GetShopType().then((res) => {
        this.catelist = res.data.data.result
      })
    },
    /**添加*/
    addgood() {
      SetShopType({
        ...this.ruleForm,
        goods_cat: this.value.join(",")
      }).then((res) => {
        this.$router.push("goods")
        if (res.status == 200) {
          this.$message({
            message: "添加成功",
            type: "success"
          })
        } else {
          this.$message.error("添加失败")
        }
      })
    },
    tabchange(newtab, objtab) {
      console.log(newtab, objtab)
      if (this.value.length == 0 && newtab != 0) {
        this.$message({
          message: "商品选择不能为空",
          type: "warning"
        })
        return false
      } else {
        //点击当前激活的下标传给进度条绑定的active
        this.active = Number(newtab)
      }
    },
    postImg(val) {
      console.log(val)
    },
    onEditorBlur($event) {
      console.log($event)
    }
  },
  created() {
    this.getcate()
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 90%;
  // margin: 0 auto;
  margin-top: 30px;
  background: #fff;
  margin: 20px;
  padding: 20px;
}
</style>
