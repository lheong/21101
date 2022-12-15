let exporess = require("express")
let Mock = require("mockjs")
const loginData = require("./common/longin.json")
const menus = require("./common/menus.json")
const users = require("./common/users.json")
const rolesData = require('./common/roles.json')
const rightsData = require('./common/rights.json')
const shoplistData = require('./common/shoplist.json')
const shopclassData = require('./common/shopclass.json')
const ordersData = require('./common/orders.json')
const rolesTree = require('./common/rolesTree.json')

let app = exporess()
// 登录
app.use("/login", function (req, res) {
	res.json(
		Mock.mock({
			...loginData
		})
	)
})
// 侧边栏数据
app.use("/menus", function (req, res) {
	res.json(
		Mock.mock({
			...menus
		})
	)
})
// 用户管理
app.use("/users", function (req, res) {
	res.json(
		Mock.mock({
			...users
		})
	)
})
//角色列表
app.use("/roles", function (req, res) {
	res.json(
		Mock.mock({
			...rolesData
		})
	)
})
//权限列表
app.use("/rights", function (req, res) {
	res.json(
		Mock.mock({
			...rightsData
		})
	)
})
//商品列表
app.use("/goods", function (req, res) {
	res.json(
		Mock.mock({
			...shoplistData
		})
	)
})
//商品分类
app.use("/categories", function (req, res) {
	res.json(
		Mock.mock({
			...shopclassData
		})
	)
})
//订单管理
app.use("/orders", function (req, res) {
	res.json(
		Mock.mock({
			...ordersData
		})
	)
})
//权限列表
app.use("/tree", function (req, res) {
	res.json(
		Mock.mock({
			...rolesTree
		})
	)
})

app.listen("8090", () => {
	console.log("监听端口  8090")
})
