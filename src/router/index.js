import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/yudezign/',
  routes: [
    // 重定向
    // {
    //   path: '*',
    //   redirect: '/index'
    // },

    {
      path: '/home',
      name: 'Home',
      component: () => import(/*webpackChunkName:'home' */'../components/home/Home.vue'),
      // 是否销毁页面（内存）
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import(/*webpackChunkName:'home' */'../components/product/Product.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/*webpackChunkName:'main' */'../components/about/About.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/join',
      name: 'Join',
      component: () => import(/*webpackChunkName:'main' */'../components/join/Join.vue'),
      meta: {
        keepAlive: true
      }
    },
    // 重定向
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
