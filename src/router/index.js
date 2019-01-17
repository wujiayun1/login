import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import home from '../pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/login' },
    {path: '/login',component:login },
    {path: '/home',component:home },
  ]
})
