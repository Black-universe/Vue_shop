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
  name: 'Home',
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
  },
  {
    path: '/params',
    name: 'Params',
    component: () =>
      import(
        /* webpackChunkName: "Params" */
        '../components/goods/Params.vue'
      )
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () =>
      import(
        /* webpackChunkName: "Goods" */
        '../components/goods/List.vue'
      )
  },
  {
    path: '/goods/add',
    name: 'Add',
    component: () =>
      import(
        /* webpackChunkName: "Add" */
        '../components/goods/Add.vue'
      )
  },
  {
    path: '/orders',
    name: 'Order',
    component: () =>
      import(
        /* webpackChunkName: "Order" */
        '../components/order/order.vue'
      )
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () =>
      import(
        /* webpackChunkName: "Reports" */
        '../components/report/report.vue'
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
to=????????????????????????
from=?????????????????????????????????
next=?????????????????????????????????
next() =??????  ???
next("/login")=???????????? ???
*/
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()

  // ??????token
  const tokenStr = window.sessionStorage.getItem('token')
  /* //????????????token????????????????????????????????????????????????login */
  if (!tokenStr) return next('/login')
  next()
})

export default router
