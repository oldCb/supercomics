import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Hero from './views/Hero'

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
      path: '/hero-:heroName',
      name: 'hero',
      meta: [
        { nav: 'Navigation' },
        { footer: 'Footer' }
      ],
      component: Hero
    }
  ]
})
