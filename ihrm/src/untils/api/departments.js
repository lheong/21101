import { http, apis } from "../http/http";


function getDepartment() {
  return http({
    url: apis("/company/department"),
    method: "get"
  })
}
// 组织架构

function getUser() {
  return http({
    url: apis("/sys/user/simple"),
    method: "get"
  })
}
// 获取员工列表

function addDepartment(data) {
  return http({
    url: apis("/company/department"),
    method: "post",
    data
  })
}
// 添加组织架构

function editDepartment(data) {
  return http({
    url:apis("company/department/" + data.id),
    method: "put",
    data
  })
}
// 编辑组织架构

function getBackfill(id) {
  console.log(id)
  return http({
    url:apis("/company/department/" + id),
    method: "get"
  })
}
// 编辑数据回填

function deleteDepartment(id) {
  return http({
    url: apis("/company/department/"+id),
    method: "delete"
  })
}
// 删除组织架构

export {
  getDepartment,
  getUser,
  addDepartment,
  editDepartment,
  getBackfill,
  deleteDepartment
}
