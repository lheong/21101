let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
const home = require("./common/home.json")
const users = require("./common/users.json")
const usersstateData = require('./common/usersState.json')
const addusersData = require('./common/addusers.json')
const rolesuserData = require('./common/rolesuser.json')
const rolesData = require('./common/roles.json')
const lsitData = require('./common/list.json')
const goodsData = require('./common/goods.json')
let app = express() //实例化express

/**登录接口 */
app.use("/login", function (req, res) {
	console.log(req, res)
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
			...home
		})
	)
})
// 用户数据列表
app.use("/users", function (req, res) {
	res.json(
		Mock.mock({
			...users
		})
	)
})

/**用户开关按钮状态接口 */
app.use('/usersState', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			...usersstateData
		})
	)
})
/**用户添加接口 */
app.use('/addusers', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			...addusersData
		})
	)
})
/**用户分配接口 */
app.use('/rolesuser', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			...rolesuserData
		})
	)
})
/**角色列表接口 */
app.use('/roles', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			...rolesData
		})
	)
})
/**权限列表接口 */
app.use('/list', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			...lsitData
		})
	)
})
/**商品列表接口 */
app.use('/goods', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			...goodsData
		})
	)
})


app.listen("8090", () => {
	console.log("监听端口 8090")
})
