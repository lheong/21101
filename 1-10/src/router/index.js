import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/home",
		name: "home",
		component: HomeView,
		children: [{
				path: "/dashboard",
				name: "dashboard",
				component: () => import("../views/dashboard.vue")
			},
			{
				path: "/staff",
				name: "staff",
				component: () => import("../views/staff.vue")
			},
			{
				path: "/organization",
				name: "organization",
				component: () => import("../views/organization.vue")
			},
			{
				path: "/CompanySettings",
				name: "CompanySettings",
				component: () => import("../views/CompanySettings.vue")
			},
			{
				path: "/jurisdiction",
				name: "jurisdiction",
				component: () => import("../views/jurisdiction.vue")
			},
			{
				path: "/socialSecurity",
				name: "socialSecurity",
				component: () => import("../views/socialSecurity.vue")
			},
			{
				path: "/checkWork",
				name: "checkWork",
				component: () => import("../views/checkWork.vue")
			},
			{
				path: "/wages",
				name: "wages",
				component: () => import("../views/wages.vue")
			},
			{
				path: "/Approval",
				name: "Approval",
				component: () => import("../views/Approval.vue")
			}, {
				path: "/shangchuan",
				name: "shangchuan",
				component: () => import("../views/shangchuan.vue")
			}
		]
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue")
	}, {
		path: "/login",
		name: "login",
		component: () => import("../views/login.vue")
	}
]

const router = new VueRouter({
	routes
})

export default router
