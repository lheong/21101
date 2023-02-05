import { http, apis } from "../http/http";
/**封装登录接口 */
export const attendan = () => {
	return http({
		url: apis("/company/department"),
		method: "get",
	});
};

export const attendances = (params) => {
	return http({
		url: apis("/attendances"),
		method: "get",
		params,
	});
};

export const salarys = (data) => {
	return http({
		url: apis("/salarys/list"),
		method: "post",
		data,
	});
};
