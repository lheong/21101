import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},

	{
		path: '/home',
		name: 'home',
		component: HomeView,
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				component: () =>
					import('../views/Dashboard.vue')
			},
			{
				path: '/employees',
				name: 'employees',
				component: () =>
					import('../views/Employees.vue')
			},
			{
				path: '/imports',
				name: 'imports',
				component: () =>
					import('../views/employees/import.vue')
			},
			{
				path: '/chakan',
				name: 'chakan',
				component: () =>
					import('../views/employees/chakan.vue')
			},
			{
				path: '/setting',
				name: 'setting',
				component: () =>
					import('../views/Setting.vue')
			}, {
				path: '/departments',
				name: 'departments',
				component: () =>
					import('../views/Departments.vue')
			}, {
				path: '/permission',
				name: 'permission',
				component: () =>
					import('../views/Permission.vue')
			}, {
				path: '/social_securitys',
				name: 'social_securitys',
				component: () =>
					import('../views/social_securitys.vue')
			}, {
				path: '/approvals',
				name: 'approvals',
				component: () =>
					import('../views/approvals.vue')
			}, {
				path: '/attendances',
				name: 'attendances',
				component: () =>
					import('../views/attendances.vue')
			}, {
				path: '/salarys',
				name: 'salarys',
				component: () =>
					import('../views/salarys.vue')
			},
		]
	},
	{
		path: '/about',
		name: 'about',
		component: () =>
			import('../views/AboutView.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () =>
			import('../views/LoginView.vue')
	},

]

const router = new VueRouter({
	routes
})

export default router
