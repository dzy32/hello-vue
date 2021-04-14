import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '../views/Demo'
import Nav from '../views/Nav'
import One from '../views/manages/One'
import Tow from '../views/manages/Tow'
import Main from '../views/Main'
import Login from '../views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
      
    },
    {
      path: "/nav",
      name: "nav",
      component: Nav,
      children: [
        {
          path: '/manages/one',
          name: 'one',
          component: One
        },
        {
          path: '/manages/tow',
          name: 'tow',
          component: Tow
        }
      ]
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    
  ]
})
