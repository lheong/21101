// 社保
import { http, apis } from "../http/http";
/**封装登录接口 */
export const company = () => {
	return http({
		url: apis("company/department"),
		method: "get",
	});
};

export const list = (data) => {
	return http({
		url: apis("social_securitys/list"),
		method: "post",
		data,
	});
};
