import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    children:[
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/dashboard.vue")
      },
      {
        path: "/permissions",
        name: "permissions",
        component: () => import("../views/permissions.vue")
      },
      {
        path: "/social",
        name: "social",
        component: () => import("../views/social.vue")
      },
      {
        path: "/departments",
        name: "departments",
        component: () => import("../views/departments.vue")
      },
      {
        path: "/employees",
        name: "employees",
        component: () => import("../views/employees.vue")
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/settings.vue")
      },
      {
        path: "/attendances",
        name: "attendances",
        component: () => import("../views/attendances.vue")
      },
      {
        path: "/salarys",
        name: "salarys",
        component: () => import("../views/salarys.vue")
      },
      {
        path: "/approvals",
        name: "approvals",
        component: () => import("../views/approvals.vue")
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
