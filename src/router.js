import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Heros from './views/Heros'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: [
        { nav: 'Navigation' },
        { footer: 'Footer' }
      ],
      component: Home
    },
    {
      path: '/heros-:herosName',
      name: 'heros',
      meta: [
        { nav: 'Navigation' },
        { footer: 'Footer' }
      ],
      component: Heros
    }
  ]
})
