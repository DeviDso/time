import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// import FullCalendar from 'vue-full-calendar'
// import moment from 'moment'
import UIkit from 'uikit'
import FullCalendar from 'vue-full-calendar'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

axios.defaults.baseURL = 'http://scheduleapi.test/api/';
Vue.http = Vue.prototype.$http = axios
Vue.prototype.$uikit = UIkit
Vue.config.productionTip = false

Vue.use(FullCalendar)
// Vue.use(moment)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
