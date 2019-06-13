import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Navigation from './components/sections/Navigation'
import TheFooter from './components/sections/TheFooter'

Vue.config.productionTip = false

Vue.component('navigation-section', Navigation)
Vue.component('theFooter-section', TheFooter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
