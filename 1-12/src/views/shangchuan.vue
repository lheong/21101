<template>
  <div class="shang">
    <div class="fle">
      <el-upload
        class="upload-demo fff"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
    }
  }
}
</script>

<style lang="scss" scoped>
.shang {
  width: 100%;
  height: 100%;
}

.fle {
  margin-left: 280px;
  margin-top: 100px;
  display: flex;

  .fff {
    width: 360px;
    height: 180px;
    line-height: 180px;
    text-align: center;
    border: 1px #ccc dashed;
  }
}
</style>
