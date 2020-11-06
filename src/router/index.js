import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './router.config'
Vue.use(Router)

//解决重定向跳转报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode:'history',
  routes:constantRouterMap
})