import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import My from '@/components/My'
import Distributor from '@/components/Distributor'
import Distributor_alert from '@/components/Distributor_alert'
import Notice from '@/components/Notice'
import TravelHotel from '@/components/TravelHotel'
import Active from '@/components/Active'
import Base from '@/components/Base'
import Customer from '@/components/Customer'

import Member from '@/components/Member'
import Sign from '@/components/Sign'
import Route from '@/components/Route'
import Tourism from '@/components/Tourism'
import Sale from '@/components/Sale'
import Opinion from '@/components/Opinion'

import Banner from '@/components/Banner'
import Note from '@/components/Note'
import Administrator from '@/components/Administrator'
import Modular from '@/components/Modular'
import Role from '@/components/Role'

import message_alert from '@/components/message_alert'
import problem_alert from '@/components/problem_alert'
import problemContent from '@/components/problemContent'
import messageContent from '@/components/messageContent'
// import Header from '@/components/Header'
// import FirstPage from '@/components/FirstPage'
// import SecondPage from '@/components/SecondPage'
// import FirstPart from '@/components/HomeComponents/FirstPart'
// import SecondPart from '@/components/HomeComponents/SecondPart'

// console.log(Login)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Distributor',
      name: 'Distributor',
      component: Distributor
    },
    {
      path: '/Distributor_alert',
      name: 'Distributor_alert',
      component: Distributor_alert
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/TravelHotel',
      name: 'TravelHotel',
      component: TravelHotel
    },
    {
      path: '/Active',
      name: 'Active',
      component: Active
    },
    {
      path: '/Base',
      name: 'Base',
      component: Base
    },
    {
      path: '/Customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Route',
      name: 'Route',
      component: Route
    },
    {
      path: '/Tourism',
      name: 'Tourism',
      component: Tourism
    },
    {
      path: '/Sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/Opinion',
      name: 'Opinion',
      component: Opinion
    },
    {
      path: '/Banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/Note',
      name: 'Note',
      component: Note
    },
    {
      path: '/Administrator',
      name: 'Administrator',
      component: Administrator
    },
    {
      path: '/Modular',
      name: 'Modular',
      component: Modular
    },
    {
      path: '/Role',
      name: 'Role',
      component: Role
    },
    {
      path: '/message_alert',
      name: 'message_alert',
      component: message_alert
    },
    {
      path: '/problem_alert',
      name: 'problem_alert',
      component: problem_alert
    },
    {
      path: '/problemContent',
      name: 'problemContent',
      component: problemContent
    },
    {
      path: '/messageContent',
      name: 'messageContent',
      component: messageContent
    },
  ]
})
