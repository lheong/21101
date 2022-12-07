import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "login",
		component: () => import("../views/LoginView.vue")
	},
	{
		path: "/home",
		name: "home",
		component: HomeView,
		children: [
			{
				path: "/welcome",
				name: "welcome",
				component: () => import("../views/Welcome.vue")
			},
			{
				path: "/users",
				name: "users",
				component: () => import("../views/Users.vue")
			},
			{
				path: "/roles",
				name: "roles",
				component: () => import("../views/Roles.vue")
			},
			{
				path: "/rights",
				name: "rights",
				component: () => import("../views/Rights.vue")
			},
		]
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue")
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
