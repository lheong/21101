import { http, apis } from "../http/http";
/**封装登录接口 */
export const setting = (params) => {
	return http({
		url: apis("/sys/role"),
		method: "get",
		params,
	});
};
