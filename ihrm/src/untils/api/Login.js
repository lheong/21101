import { http, apis } from "../http/http";
/**封装登录接口 */
export const LoginPost = (data) => {
	return http({
		url: apis("/sys/login"),
		method: "post",
		data,
	});
};
