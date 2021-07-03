import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../components/Login.vue'

import Home from '../components/Home.vue'

import Welcome from '../components/Welcome.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/home',
  name: 'Login',
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/users',
    name: 'Users',
    component: () =>
      import(/* webpackChunkName: "Users" */ '../components/user/users.vue')
  },
  {
    path: '/rights',
    name: 'Rights',
    component: () =>
      import(
        /* webpackChunkName: "Rights" */
        '../components/power/Rights.vue'
      )
  },
  {
    path: '/roles',
    name: 'Roles',
    component: () =>
      import(
        /* webpackChunkName: "Roles" */
        '../components/power/Roles.vue'
      )
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () =>
      import(
        /* webpackChunkName: "Categories" */
        '../components/goods/Cate.vue'
      )
  }
  ]
}
  // {
  //       path: '/',
  //       name: 'Home',
  //       component: Home
  //   },
  //   {
  //       path: '/about',
  //       name: 'About',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () =>
  //           import ( /* webpackChunkName: "about" */ '../views/About.vue')
  //   }
]

const router = new VueRouter({
  routes
})

/*
to=将要访问的路径；
from=代表从哪个函数跳转来；
next=是一个函数，表示放行；
next() =放行  ；
next("/login")=强制跳转 ；
*/
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()

  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  /* //如果不是token值就表示没有登录，那么就强制跳转login */
  if (!tokenStr) return next('/login')
  next()
})

export default router
