import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/user/userList.vue'),
        meta: { title: ['数据管理', '用户列表'] }
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import('../views/user/shopList.vue'),
        meta: { title: ['数据管理', '商家列表'] }
      },
      {
        path: '/foodList',
        name: 'foodList',
        component: () => import('../views/user/foodList.vue'),
        meta: { title: ['数据管理', '食品列表'] }
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/user/orderList.vue'),
        meta: { title: ['数据管理', '订单列表'] }
      },
      {
        path: '/adminList',
        name: 'adminList',
        component: () => import('../views/user/adminList.vue'),
        meta: { title: ['数据管理', '管理员列表'] }
      },
      {
        path: '/addShop',
        name: 'addShop',
        component: () => import('../views/addShop/addShop.vue'),
        meta: { title: ['添加数据', '添加商铺'] }
      },
      {
        path: '/addGoods',
        name: 'addGoods',
        component: () => import('../views/addShop/addGoods.vue'),
        meta: { title: ['添加数据', '添加商品'] }
      },
      {
        path: '/visitor',
        name: 'visitor',
        component: () => import('../views/visitor.vue'),
        meta: { title: ['图表', '用户分布'] }
      },
      {
        path: '/vueEdit',
        name: 'vueEdit',
        component: () => import('../views/vueEdit.vue'),
        meta: { title: ['编辑', '文本编辑'] }
      },
      {
        path: '/adminSet',
        name: 'adminSet',
        component: () => import('../views/adminSet.vue'),
        meta: { title: ['设置', '管理员设置'] }
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../views/explain.vue'),
        meta: { title: ['说明', '说明'] }
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
