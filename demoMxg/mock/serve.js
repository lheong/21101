let exporess = require("express")
let Mock = require("mockjs")
const loginData = require("./common/longin.json")
const home = require("./common/home.json")
const users = require("./common/users.json")
const rolesData = require('./common/roles.json') //角色列表
const rightsData = require('./common/rights.json') //权限列表
const shoplistData = require('./common/shoplist.json') //商品列表
const shopclassData = require('./common/shopclass.json') //商品分类
const ordersData = require('./common/orders.json') //订单管理
const rolesTree = require('./common/rolesTree.json') /**权限 */

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
app.use("/left", function (req, res) {
	res.json(
		Mock.mock({
			...home
		})
	)
})
app.use("/users", function (req, res) {
	res.json(
		Mock.mock({
			...users
		})
	)
})
app.use("/roles", function (req, res) {
	res.json(
		Mock.mock({
			...rolesData
		})
	)
})
app.use("/rights", function (req, res) {
	res.json(
		Mock.mock({
			...rightsData
		})
	)
})
app.use("/goods", function (req, res) {
	res.json(
		Mock.mock({
			...shoplistData
		})
	)
})
app.use("/categories", function (req, res) {
	res.json(
		Mock.mock({
			...shopclassData
		})
	)
})
app.use("/orders", function (req, res) {
	res.json(
		Mock.mock({
			...ordersData
		})
	)
})
/**权限列表 */
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
