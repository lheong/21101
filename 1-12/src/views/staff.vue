<template>
  <div class="staff">
    <div class="staff-box">
      <el-card class="staff-one">
        <div class="abc">
          <div class="one-box">
            <i class="el-icon-info" style="color: #5687fe"></i>
            当前共有1852条记录
          </div>
          <div class="tow">
            <el-button type="danger">普通excel导入</el-button>
            <el-button type="warning">负责excel导出</el-button>
            <el-button type="success" @click="add">excel导出</el-button>
            <el-button type="primary">新增员工</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="序号" width="55" />
      <el-table-column prop="username" label="姓名" sortable />
      <el-table-column prop="staffPhoto" label="头像" sortable>
        <el-image
          style="width: 100px; height: 100px; border-radius: 50%"
          src="http://qianxi-520-1316496593.cos.ap-guangzhou.myqcloud.com/v2-5ae21127525ff29fcafb0b4d8ea00f6a_720w.jpg"
        ></el-image>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" sortable />
      <el-table-column prop="workNumber" label="工号" sortable />
      <el-table-column prop="xing" label="聘用形式" sortable />
      <el-table-column prop="departmentName" label="部门" sortable />
      <el-table-column prop="timeOfEntry" label="入职时间" sortable />
      <el-table-column prop="enableState" label="账户状态" sortable>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-table-column>
      <el-table-column prop="username" label="操作" width="280" sortable>
        <span class="ons">查看</span>
        <span class="ons">转正</span>
        <span class="ons">调岗</span>
        <span class="ons">离职</span>
        <span class="one">删除</span>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import $axios from 'axios'
export default {
  name: "",
  data() {
    return {
      list: [
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c2",
          mobile: "13800000002",
          username: "黄麒帆",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: "1",
          timeOfEntry: "2018-11-02",
          formOfEmployment: "1",
          workNumber: "001",
          correctionTime: "2018-11-30",
          departmentName: "总裁办",
          staffPhoto:
            "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/Snipaste_2023-01-10_21-09-29.png"
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c3",
          mobile: "13800000003",
          username: "黄麒帆",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: "1",
          timeOfEntry: "2018-11-04",
          formOfEmployment: "1",
          workNumber: "我给你添一个哈",
          correctionTime: "2018-11-20",
          departmentName: "市场部",
          staffPhoto:
            "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/Snipaste_2023-01-10_21-15-30.png"
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c4",
          mobile: "13800000004",
          username: "罗晓晓1",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: "1",
          timeOfEntry: "2018-12-02",
          formOfEmployment: 1,
          workNumber: "1111",
          correctionTime: "2018-12-31",
          departmentName: "人事部",
          staffPhoto:
            "http://qianxi-520-1316496593.cos.ap-guangzhou.myqcloud.com/v2-5ae21127525ff29fcafb0b4d8ea00f6a_720w.jpg"
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c5",
          mobile: "13400000001",
          username: "文吉星",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: 1,
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1,
          workNumber: "1001",
          correctionTime: "1970-01-01",
          departmentName: "人事部",
          staffPhoto: ""
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c6",
          mobile: "13400000002",
          username: "巴思慧",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: "1",
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1,
          workNumber: "1002",
          correctionTime: "1970-01-01",
          departmentName: "人事部",
          staffPhoto:
            "http://qianxi-520-1316496593.cos.ap-guangzhou.myqcloud.com/v2-0d283c8d476c3ab551d97ce47f276d5c_r.jpg"
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c7",
          mobile: "13500000001",
          username: "乔海",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: "1",
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1,
          workNumber: "2001",
          correctionTime: "1970-01-01",
          departmentName: "总裁办",
          staffPhoto:
            "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/1hang.jpg"
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c8",
          mobile: "13500000002",
          username: "董昊空",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: "1",
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1,
          workNumber: "2002",
          correctionTime: "1970-01-01",
          departmentName: "总裁办",
          staffPhoto:
            "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/Jay1.jpeg"
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365c9",
          mobile: "13500000003",
          username: "周乐天",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: 1,
          timeOfEntry: "2018-01-01",
          formOfEmployment: 1,
          workNumber: "2003",
          correctionTime: "1970-01-01",
          departmentName: "财务部",
          staffPhoto: ""
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365ca",
          mobile: "13600000001",
          username: "吕勇锐",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: 1,
          timeOfEntry: "1992-08-04",
          formOfEmployment: 1,
          workNumber: "0001",
          correctionTime: "2020-01-01",
          departmentName: "总裁办",
          staffPhoto: ""
        },
        {
          xing: "正式",
          id: "604f764971f93f3ac8f365cb",
          mobile: "13600000002",
          username: "袁永安",
          password: "e10adc3949ba59abbe56e057f20f883e",
          enableState: 1,
          timeOfEntry: "1993-08-04",
          formOfEmployment: 1,
          workNumber: "0002",
          correctionTime: "2020-01-01",
          departmentName: "总裁办",
          staffPhoto: ""
        }
      ],
      value: true
    }
  },
  methods: {
    add() {
      this.$router.push("/shangchuan")
    }
  },
  created() {
    // $axios('http://ihrm.itheima.net/prod-api/sys/user').then(res => {
    // 	console.log(res);
    // })
  }
}
</script>

<style lang="scss" scoped>
.staff-box {
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  margin-top: 10px;

  .staff-one {
    height: 80px;
    line-height: 35px;
    width: 100%;

    .abc {
      display: flex;

      .one-box {
        height: 30px;
        font-size: 15px;
        text-align: center;
        width: 200px;
        line-height: 30px;
        background-color: #e6f7ff;
        border: 1px solid #9fdaff;
      }

      .tow {
        margin-left: 600px;
        margin-right: 20px;

        .el-button {
          padding: 5px 10px 5px 10px;
        }
      }
    }
  }
}

.ons {
  color: rgb(31, 122, 242);
  margin-right: 5px;
}

.one {
  color: #ccc;
}
</style>
