import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/SignIn'
import Home from '../components/Home'
import Account from '../components/admin/Account'
import Admin from '../components/admin/Admin'
import Goods from '../components/customer/Goods'
import Comment from '../components/customer/Comment'
import Bill from '../components/customer/Bill'
import Basket from '../components/customer/Basket'

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
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/bill',
      name: 'Bill',
      component: Bill
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    }
  ]
})
