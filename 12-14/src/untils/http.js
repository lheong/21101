import axios from "axios"
import {
	getToken,
	removeToken
} from "./auth"
import router from "vue-router"
import {
	MessageBox,
} from "element-ui"

const http = axios.create({
	baseUrl: process.env.VUE_APP_CONSOLE_URL,
	// 超时时间变成了毫秒
	timeout: 1000 * 30,
	// 跨域是否开凭证
	withCredentials: true,
	headers: {
		"Content-type": "application/json; charset=utf-8"
	}
})
// 请求之前做的那些事情
// 1确定当前用户是否登录,超时和过期
// 当前的token是否存在
// token的时 间是否过期
// 2token--添加到每个用户请求中
// 3状态码
// 200 成功
// 401(没有权限)
// 500
// 500
// 502
// 404
http.interceptors.request.use(
	(config) => {
		// 请求带上token
		config.headers["Authorization"] = getToken()
		// console.log(config, "config")
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
// 请求响应
http.interceptors.response.use(
	(response) => {
		// Message({
		// 	message: response.data.meta.msg,
		// 	type: 'success'
		// })

		if (response.data && response.data.status === 2) {
			removeToken()
			router.push({
				name: "Login"
			})
		}
		return response
	},
	(error) => {
		// return Promise.reject(error)
		let title = ""
		let message = ""
		if (error && error.response) {
			message = error.response.statusText
			// 401,token失效
			// if (error.response.data.message==2) {
			// 	router.push({
			// 		name: "login"
			// 	})
			// }
			switch (
			error.response.status //跨域存在获取不到状态码的情况
			) {
				case 400:
					title = "错误信息"
					break
				case 401:
					title = "资源未授权"
					break
				case 403:
					title = "禁止访问"
					break
				case 404:
					title = "未找到所请求的资源"
					break
				case 405:
					title = "不允许使用该方法"
					break
				case 408:
					title = "请求超时"
					break
				case 500:
					title = "内部服务器错误"
					break
				case 501:
					title = "未实现"
					break
				case 502:
					title = "网络错误"
					break
				case 503:
					title = "服务不可用"
					break
				case 504:
					title = "网络超时"
					break
				case 505:
					title = "HTTP版本不受支持"
					break
				default:
					title = error.response.status
			}
			return MessageBox.alert(message, title, {
				type: "warning"
			})
		} else {
			return MessageBox.alert("请联系系统管理员，或稍后再试！", "未知错误", {
				type: "error"
			})
		}
	}
)
// 封装url路径
http.addorUrl = (actionName) => process.env.VUE_APP_BASE_API + actionName
// 封装请求
http.send = (url, data = {}, method = "get", contentType = "json") => {
	return http({
		method,
		url: http.addorUrl(url),
		params: method === 'get' ? data : '',
		data,
		headers: {
			"Content-type": contentType === "json" ? "application/json;charset=utf-8" : "multipart/form-data; boundary=something"
		}
	}).then(res => {
		return res
		//console.log(res);
	})

}
export default http
