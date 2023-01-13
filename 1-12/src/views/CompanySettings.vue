<template>
  <div class="company">
    <el-card>
      <el-button type="primary">添加权限</el-button>
    </el-card>
    <el-table
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      :data="lists"
      border
      style="width: 100%"
    >
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="code" label="标识" />
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="username" label="操作" width="280">
        <span class="ons">添加</span>
        <span class="ons">编辑</span>
        <span class="ons">删除</span>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      lists: [
        {
          id: "604f7df5f900be1850edb152",
          name: "员工管理",
          description: "用户管理菜单",
          type: 1,
          code: "employees",
          pid: "0",
          enVisible: "1"
        },
        {
          id: "604f7e07f900be1850edb153",
          name: " 公司设置",
          description: "公司设置菜单",
          type: 1,
          code: "settings",
          pid: "0",
          enVisible: "1"
        },
        {
          id: "604f7e17f900be1850edb154",
          name: " 权限管理",
          description: "权限菜单",
          type: 1,
          code: "permissions",
          pid: "0",
          enVisible: "1"
        },
        {
          id: "604f7e50f900be1850edb155",
          name: " 社保",
          description: " 社保",
          type: 1,
          code: "social_securitys",
          pid: "0",
          enVisible: "1"
        },
        {
          id: "604f7e5bf900be1850edb156",
          name: "审批",
          description: "审批",
          type: 1,
          code: "approvals",
          pid: "0",
          enVisible: "1"
        },
        {
          id: "604f7e66f900be1850edb157",
          name: "考勤",
          description: "考勤",
          type: 1,
          code: "attendances",
          pid: "0",
          enVisible: "1"
        },
        {
          id: "604f7e79f900be1850edb158",
          name: "工资",
          description: "工资",
          type: 1,
          code: "salarys",
          pid: "0",
          enVisible: "0"
        },
        {
          id: "604f7eabf900be1850edb159",
          name: "组织架构",
          description: "组织架构",
          type: 1,
          code: "departments",
          pid: "0",
          enVisible: "1"
        },
        {
          id: "6050175b140b332e04cced02",
          name: "测试",
          description: "aa",
          type: 2,
          code: "aa",
          pid: "604f7df5f900be1850edb152",
          enVisible: "1"
        },
        {
          id: "63bc2b8981b4da1595e809be",
          name: "990",
          description: "990",
          type: 1,
          code: "990",
          pid: "63bc2b7c81b4da1595e809bc",
          enVisible: "false"
        },
        {
          id: "63bc32fa81b4da1595e809cf",
          name: "00",
          description: "00",
          type: 1,
          code: "00",
          pid: "63bc32f381b4da1595e809ce",
          enVisible: "false"
        },
        {
          id: "63bcd33b81b4da1595e80a53",
          name: "全能",
          description: "aaa",
          code: "/router",
          enVisible: "0"
        },
        {
          id: "63bcd35a81b4da1595e80a55",
          name: "quann",
          description: "123",
          code: "12312",
          enVisible: "0"
        },
        {
          id: "63bcd39d81b4da1595e80a58",
          name: "123",
          description: "123",
          code: "123",
          enVisible: "0"
        }
        // { "id": "63bcd3ba81b4da1595e80a5b", "name": "123", "description": "123", "code": "123", "enVisible": "0" },
        // { "id": "63bcd3e081b4da1595e80a5e", "name": "123", "description": "123", "code": "123", "enVisible": "" },
        // { "id": "63bcd40481b4da1595e80a62", "name": "123", "description": "123", "code": "123", "enVisible": "false" },
        // { "id": "63bcd40981b4da1595e80a63", "name": "123", "description": "123", "code": "123", "enVisible": "true" },
        // { "id": "63bcd87881b4da1595e80a84", "name": "群志123", "description": "123123", "code": "123123", "pid": "63bcd86d81b4da1595e80a83", "enVisible": "0" },
        // { "id": "63bcff9181b4da1595e80b28", "name": "111222", "description": "1122", "type": 1, "code": "11122", "pid": "63bcdc1281b4da1595e80a8e", "enVisible": "true" },
        // { "id": "63bd113981b4da1595e80b99", "name": "子寄到你家啊", "description": "", "type": 2, "code": "over", "pid": "63bd110681b4da1595e80b97", "enVisible": "0" },
        // { "id": "63bd4ec281b4da1595e823c1", "name": "789", "description": "789", "type": 2, "code": "89+", "pid": "63bd4de581b4da1595e823bf", "enVisible": "0" },
        // { "id": "63bd644681b4da1595e82417", "name": "111", "description": "333", "type": null, "code": "222", "pid": null, "enVisible": "1" },
        // { "id": "63bd648581b4da1595e8241a", "name": "是的", "description": "收到v", "type": null, "code": "收到v", "pid": null, "enVisible": "1" },
        // { "id": "63bd659381b4da1595e8241d", "name": "阿达v", "description": "士大夫v", "type": 2, "code": "是否v", "pid": "63bd658781b4da1595e8241c", "enVisible": "1" },
        // { "id": "63bd692a81b4da1595e82427", "name": "2", "description": "2", "type": null, "code": "2", "pid": "63bd691f81b4da1595e82426", "enVisible": "0" },
        // { "id": "63be65cc81b4da1595e82d25", "name": "测试33", "description": "测试33", "type": 2, "code": "测试33", "pid": "63be65c481b4da1595e82d24" },
        // { "id": "63be928b81b4da1595e82db0", "name": "11", "description": "11", "type": 2, "code": "11", "pid": "604f7e66f900be1850edb157" },
        // { "id": "63be929581b4da1595e82db1", "name": "11", "description": "11", "type": 1, "code": "11", "pid": "0" },
        // { "id": "63be98cc81b4da1595e82dd4", "name": "丽明", "description": "丽明这个人啥都会", "code": "啥都会" },
        // { "id": "63be995d81b4da1595e82dd5", "name": "丽明真滴会", "description": "32", "code": "3123" },
        // { "id": "63be99c481b4da1595e82dd6", "name": "1111", "description": "111", "type": 1, "code": "111", "pid": "0", "enVisible": "false" },
        // { "id": "63be9a4e81b4da1595e82ddb", "name": "丽明超厉害", "description": "丽明是一个很会的人,一直在伪装", "code": "1002" },
        // { "id": "63be9a8481b4da1595e82ddc", "name": "马丽明好厉害", "description": "13", "code": "1234" },
        // { "id": "63bea5aa81b4da1595e82df8", "name": "丽明哥哥好厉害", "description": "13", "code": "213" },
        // { "id": "63bea65b81b4da1595e82dfa", "name": "马丽明", "description": "2", "code": "3123" },
        // { "id": "63bea65c81b4da1595e82dfb", "name": "22", "description": "22", "code": "22", "pid": "0" },
        // { "id": "63bea68d81b4da1595e82e06", "name": "333", "description": "333", "code": "33", "pid": "0" },
        // { "id": "63bea6df81b4da1595e82e09", "name": "444", "description": "44", "code": "44", "pid": "0" },
        // { "id": "63bea71881b4da1595e82e0c", "name": "555", "description": "55", "code": "555", "pid": "63bea71081b4da1595e82e0b" },
        // { "id": "63bea73581b4da1595e82e0e", "name": "444", "description": "44", "code": "yj", "pid": "604f7e07f900be1850edb153", "enVisible": "0" }
      ]
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="scss" scoped>
.company {
  padding: 10px;
}

.el-card {
  margin: 10px;

  .el-button {
    // float: right;
    margin-left: 1150px;
  }
}

.ons {
  color: rgb(31, 122, 242);
  margin-right: 5px;
}
</style>
