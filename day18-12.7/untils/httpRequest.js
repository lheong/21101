import axios from "axios";
import { getToken } from "./auth";
import router from "vue-router";
import { MessageBox } from "element-ui";

const http = axios.create({
	baseURL: "/", // 地址
	timeout: 1000 * 30, // 超时时间变成了毫秒
	/**跨域是否开凭证 */
	withCredentials: true,
	headers: {
		"Content-Type": "application/json; charset=utf-8"
	}
});

// 首先发送请求之前做那些事情呢
// 1，确定当前用户是否登录，超时和过期
// 		当前的token是否存在
//		token的时间是否过期
// 2.token----添加到每个用户请求中

// 添加请求拦截器
http.interceptors.request.use(
	(config) => {
		console.log(config, "config");
		/**谓求带上token */
		config.headers["Authorization"] = getToken();
		// 在发送请求之前做些什么
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
	(response) => {
		if (response.data && response.data.status === 2) {
			// 401, token失效
			/**
			 * TODO: token过期处理接口文档没有明确标识
			 */
			// removeToken()
			router.push({
				name: "login"
			});
		}
		return response;
	},
	(error) => {
		console.log(error, "error");
		let title = "";
		let message = "";
		if (error && error.response) {
			message = error.response.statusText;
			// 401, token失效
			// if (error.response.data.status === 2) {
			//   router.push({
			//     name: 'login'
			//   })
			// }
			switch (
			error.response.status // 跨域存在获取不到状态码的情况
			) {
				case 400:
					title = "错误请求";
					break;
				case 401:
					title = "资源未授权";
					break;
				case 403:
					title = "禁止访问";
					break;
				case 404:
					title = "未找到所请求的资源";
					break;
				case 405:
					title = "不允许使用该方法";
					break;
				case 408:
					title = "请求超时";
					break;
				case 500:
					title = "内部服务器错误";
					break;
				case 501:
					title = "未实现";
					break;
				case 502:
					title = "网关错误";
					break;
				case 503:
					title = "服务不可用";
					break;
				case 504:
					title = "网关超时";
					break;
				case 505:
					title = "HTTP版本不受支持";
					break;
				default:
					title = error.response.status;
			}
			return MessageBox.alert(message, title, {
				type: "warning"
			});
		} else {
			// 跨域获取不到状态码或者其他状态进行的处理
			return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
				type: "error"
			});
		}
	}
);

export default http;
