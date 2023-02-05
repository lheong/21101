import { http, apis } from "../http/http";
/**封装登录接口 */
export const aapprovals = (params) => {
	return http({
		url: apis("/user/process/instance/1/10"),
		method: "put",
		params,
	});
};
