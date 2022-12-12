import http from '@/untils/http'
/**获取用户列表信息 */
export const GetUser = (params) => {
	return http.send("/users", params).then(res => {
		return res
	})
}
/**搜索接口 */
export const GetSearchUser = (params) => {
	return http.send("/users", params).then(res => {
		return res
	})
}
/**添加用户 */
export const SetUser = (data) => {
	return http.send("/users",data, 'post').then(res => {
		return res
	})
}
/**编辑用户 */
export const UpdateUser = (data) => {
	return http.send("/users",data, 'put').then(res => {
		return res
	})
}
/**删除用户 */
export const DelUser = (id) => {
	return http.send("/users",id, 'delete').then(res => {
		return res
	})
}
/**修改用户角色 */
export const UpdateUserAss = (obj) => {
	return http.send("/users",obj, 'put').then(res => {
		return res
	})
}
/**获取角色列表 */
export const GetRoles = () => {
	return http.send("/roles",'get').then(res => {
		return res
	})
}
/**添加角色 */
export const AddRoles = (data) => {
	return http.send("/roles",data,'post').then(res => {
		return res
	})
}
/**删除角色 */
export const DelRoles = (id) => {
	return http.send("/roles",id,'delete').then(res => {
		return res
	})
}
/**编辑角色 */
export const EditRoles = (data) => {
	return http.send("/roles",data,'put').then(res => {
		return res
	})
}
/**权限树状图 */
export const GetTree = () => {
	return http.send("/tree").then(res => {
		return res
	})
}
/**角色授权 */
export const SetRolse = (data) => {
	return http.send("/roles",data,"post").then(res => {
		return res
	})
}
/**角色授权 */
export const DeleteRolse = (data) => {
	return http.send("/roles",data,"delete").then(res => {
		return res
	})
}
/**商品分类数据 */
export const GetShopType = () => {
	return http.send("/categories").then(res => {
		return res
	})
}
/**添加商品数据 */
export const SetShopType = (data) => {
	return http.send("/goods",data,"post").then(res => {
		return res
	})
}


