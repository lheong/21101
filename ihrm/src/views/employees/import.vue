<template>
  <!-- excel导入模块 -->
  <div class="StaffImport">
    <div class="box">
      <el-upload
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <el-button size="mini" type="primary" style="margin-top: 68px"
          >点击上传</el-button
        >
      </el-upload>
      <el-upload
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
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.StaffImport {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  height: 50%;
  background-color: #fff;
  margin: 10px;
}
.box {
  padding: 10px;
  display: flex;
  margin-top: 60px;
}
</style>
