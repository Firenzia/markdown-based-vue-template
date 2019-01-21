import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import './registerServiceWorker'
import filter from './filter'

Vue.config.productionTip = false
Vue.filter('pipe', filter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
