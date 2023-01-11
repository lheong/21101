<template>
  <div class="content">
    <TitleNav />
    <el-card class="box-card">
      <div class="card-top">
        <div class="img">
          <img
            src="http://ihrm-java.itheima.net/static/img/head.b6c3427.jpg"
            alt=""
          />
        </div>
        <div>
          <div style="font-size: 25px">早安,哥就是大烧豪,祝你开心每一天!</div>
          <div style="font-size: 22px; color: #ccc">
            哥就是大烧豪 | 传智博客-总裁办
          </div>
        </div>
      </div>
    </el-card>
    <div class="type" style="display: flex">
      <div class="type-left">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>工作日历</span>
            </div>
          </template>
          <div>
            <el-calendar ref="calendar"> </el-calendar>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <template #header>
            <div class="card-header">
              <span>公告</span>
            </div>
          </template>
          <div style="display: flex; align-items: center">
            <img
              src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg"
              alt=""
              style="width: 100px"
            />
            <div>
              <span>朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
              <div style="margin-top: 10px">2018-07-21 15：21：38</div>
            </div>
          </div>
          <div style="padding: 0 60px 0 20px">
            <hr />
          </div>
          <div style="display: flex; align-items: center">
            <img
              src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg"
              alt=""
              style="width: 100px"
            />
            <div>
              <span>朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
              <div style="margin-top: 10px">2018-07-21 15：21：38</div>
            </div>
          </div>
          <div style="padding: 0 60px 0 20px">
            <hr />
          </div>
          <div style="display: flex; align-items: center">
            <img
              src="http://ihrm-java.itheima.net/static/img/img.0615818.jpeg"
              alt=""
              style="width: 100px"
            />
            <div>
              <span>朱继柳</span> 发布了 第1期"传智大讲堂"互动讨论获奖名单公布
              <div style="margin-top: 10px">2018-07-21 15：21：38</div>
            </div>
          </div>
          <div style="padding: 0 60px 0 20px">
            <hr />
          </div>
        </el-card>
      </div>
      <div class="type-right" style="width: 45%; margin-left: 10px">
        <el-card class="box-card">
          <div class="card-header">
            <span class="right-top">流程申请</span>
          </div>
          <div class="top-btn">
            <button>加班离职</button>
            <button>请假调休</button>
            <button>审批列表</button>
            <button>我的信息</button>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <div class="card-header">
            <span class="right-top">快速开始/便捷导航</span>
          </div>
          <div class="top-btn">
            <button>人事月报</button>
            <button>考勤查询</button>
            <button>考勤统计</button>
            <button>员工审核</button>
            <button>组织架构</button>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <div class="card-header">
            <span class="right-top">帮助链接</span>
          </div>
          <div class="right-img">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiAAAABMCAYAAABUIAwUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDMkFGRDdBQkYwNTdFODExODMxQ0RDRjMxQThGRUQ3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERTM5Njk4NUM0N0UxMUU4OTNGMDg5NUM0QTI2OEQ2OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERTM5Njk4NEM0N0UxMUU4OTNGMDg5NUM0QTI2OEQ2OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2FhYzFkYjUtNzJkZi0wYTRiLWFlZGYtMTQ2ZWU2ZjhhOGE0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMyQUZEN0FCRjA1N0U4MTE4MzFDRENGMzFBOEZFRDc3Ii8+IDwvcmRmOkRlc2Ny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"
              alt=""
            />
            <div>
              <span>入门指南</span>
              <span>在线帮助手册</span>
              <span>联系技术支持</span>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style lang="scss" scoped>
.user {
  height: 100%;
}

p {
  background-color: #eaecef;
  width: 100%;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}

.content {
  padding: 10px;
  background-color: #eaecef;
}

.img {
  width: 140px;
  height: 140px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
}

.card-top {
  display: flex;

  div:nth-child(2) {
    padding-top: 20px;
  }
}

.type {
  margin-top: 26px;
}

.type-left {
  width: 55%;
}

.right-top {
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 6px solid #8a97f8;
}

.top-btn {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  button {
    padding: 20px 60px;
    margin-top: 10px;
    margin-right: 20px;
    border: 1px solid #ccc;
    font-size: 22px;
    color: rgba(67, 66, 66, 0.802);
    background-color: #ffffff;
    border-radius: 10px;
  }
}

.right-img {
  width: 100%;
  margin-top: 30px;

  img {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
}
</style>
