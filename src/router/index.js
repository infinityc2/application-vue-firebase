import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/SignIn'
import Account from '../components/admin/Account'
import Goods from '../components/customer/Goods'
import Comment from '../components/customer/Comment'
import Bill from '../components/customer/Bill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
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
    }
  ]
})
