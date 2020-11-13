import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import router from './router'
import store from './store'
import './permission'
import './global.less'
import './config/action'
import { VueAxios } from './util/request'
Vue.config.productionTip = false

import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn');

Vue.prototype.$moment = moment

import './mock'
Vue.use(VueAxios)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
