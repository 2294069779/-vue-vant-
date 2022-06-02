import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import axios from 'axios'

// //使用vant组件日历组件，layout布局组件,tag标记组件
import { Calendar, Col, Row, Tag } from 'vant'

Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.use(Calendar)
Vue.use(Col)
Vue.use(Row)
Vue.use(Tag)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
