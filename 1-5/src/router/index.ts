import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/mylogin"
  },
  {
    path: "/mylogin",
    name: "MyLogin",
    component: () => import("../views/MyLogin.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    children:[
      {
        path: "/userindex",
        name: "userindex",
        component: () => import("../views/userIndex.vue")
      },
      {
        path: "/permiss",
        name: "permiss",
        component: () => import("../views/permiss.vue")
      },
      // {
      //   path: "/yearMonth",
      //   name: "yearMonth",
      //   component: () => import("../views/yearMonth.vue")
      // },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
