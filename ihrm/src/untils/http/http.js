import axios from "axios";
import { getToken } from "../http/auth";
import { MessageBox } from "element-ui";
// 引入路由
import router from "@/router";
const http = axios.create({
	baseURL: "/",

	// baseUrl: process.env.VUE_APP_CONSOLE_URL,
	// /是所有得
	timeout: 1000,
	// 超时时间变成了毫秒
	headers: {
		"Content-Type": "application/json; charset=utf-8",
	},
});

// 添加请求拦截器
http.interceptors.request.use(
	(config) => {
		// 请求带上token
		config.headers["Authorization"] = `Bearer ${getToken()}`;
		// 在发送请求之间做写什么
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
http.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		return response;
	},
	(error) => {
		// 对响应错误做点什么
		let title = "";
		let message = "";
		if (error && error.response) {
			switch (error.response.status) {
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
					title = "未找到所请求得资源";
					break;
				default:
					title = error.response.status;
			}
			return MessageBox.alert(message, title, {
				type: "warning",
			});
		} else {
			return MessageBox.alert("请联系系统管理员", "未知错误", {
				type: "error",
			});
		}
	}
);

let apis = (val) => {
	return process.env.VUE_APP_BASE_API + val;
};

export { http, apis };
