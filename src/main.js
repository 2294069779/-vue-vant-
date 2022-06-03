import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import axios from 'axios'

// //使用vant组件日历组件，layout布局组件,tag标记组件
import { Calendar, Col, Row, Tag, DropdownItem, DropdownMenu, Grid, GridItem, Cell, Image as VanImage, Pagination, Tabbar, TabbarItem } from 'vant'

Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.use(Calendar)
Vue.use(Col)
Vue.use(Row)
Vue.use(Tag)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(GridItem)
Vue.use(Grid)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(Pagination)
Vue.use(Tabbar)
Vue.use(TabbarItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
