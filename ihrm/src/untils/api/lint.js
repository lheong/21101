import { http, apis } from "../http/http";
/**封装登录接口 */
export const role = (params) => {
	return http({
		url: apis("/sys/user"),
		method: "get",
		params,
	});
};
