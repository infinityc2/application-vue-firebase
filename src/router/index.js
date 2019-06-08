import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/SignIn'
import Home from '../components/Home'
import Account from '../components/admin/Account'
import Admin from '../components/admin/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
