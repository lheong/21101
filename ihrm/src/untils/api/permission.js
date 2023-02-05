import { http, apis } from "../http/http";
/**封装登录接口 */
export const permission = () => {
	return http({
		url: apis("/sys/permission"),
		method: "get",
	});
};
