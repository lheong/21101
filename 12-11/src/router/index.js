import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'login',
		component: () =>
			import('../views/common/LoginView.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: HomeView,
		children: [
			{
				path: '/welcome',
				name: 'welcome',
				component: () => import('../views/common/WelcomeView.vue'),
			},
			{
				path: '/users',
				name: 'users',
				component: () => import('../views/users/UsersView.vue'),
				meta: [{ title: '用户管理', name: '用户列表' }]
			},
			{
				path: '/roles',
				name: 'roles',
				component: () => import('../views/rights/RolesView.vue'),
				meta: [{ title: '权限管理', name: '角色列表' }]
			},
			{
				path: '/rights',
				name: 'rights',
				component: () => import('../views/rights/RightsView.vue'),
				meta: [{ title: '权限管理', name: '权限列表' }]
			},
			{
				path: '/goodsView',
				name: 'goodsView',
				component: () => import('../views/goods/GoodsView.vue'),
				meta: [{ title: '商品管理', name: '商品列表' }]
			},
			{
				path: '/categoriesView',
				name: 'categoriesView',
				component: () => import('../views/goods/CategoriesView.vue'),
				meta: [{ title: '商品管理', name: '分类参数' }]
			},
			{
				path: '/categoriessView',
				name: 'categoriessView',
				component: () => import('../views/goods/ParamsView.vue'),
				meta: [{ title: '商品管理', name: '商品分类' }]
			},
			{
				path: '/ordersView',
				name: 'ordersView',
				component: () => import('../views/orders/OrdersView.vue'),
				meta: [{ title: '订单管理', name: '订单列表' }]
			},
			{
				path: '/1View',
				name: '1View',
				component: () => import('../views/reports/ReportsView.vue'),
				meta: [{ title: '数据统计', name: '数据报表' }]
			},
		]
	},
	{
		path: '/about',
		name: 'about',
		component: () =>
			import('../views/AboutView.vue')
	},

]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
