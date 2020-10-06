import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import Loader from '@/components/app/Loader'


Vue.config.productionTip = false

Vue.component('Loader', Loader)

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
