import router from './router'
import store from './store'
import storage from 'store'
import {ACCESS_TOKEN} from './store/assets.config'
import { setDocumentTitle, domTitle } from '@/util/domUtil'
import NProgress from 'nprogress'
import notification from 'ant-design-vue/es/notification'
import 'nprogress/nprogress.css'
//免登陆路由名单
const allowList = ['login', 'register', 'registerResult']
const loginPath = "/login"
const defaultPath = '/dashboard'
router.beforeEach((to, from, next)=>{

    NProgress.start()
    to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
  if(storage.get(ACCESS_TOKEN)){
    if(to.path === loginPath){
        next({path:defaultPath})
        NProgress.done()
    }else{
        if(store.getters.roleId ===""){
            store.dispatch("GetUserInfo").then(res=>{
              const roles = res.result && res.result.role
              // const result = res.result
                store.dispatch('GenerateRoutes',{roles}).then(()=>{
                    router.addRoutes(store.getters.addRouter)
                    const redirect = decodeURIComponent(from.query.redirect || to.path)
                    if (to.path === redirect) {
                        // set the replace: true so the navigation will not leave a history record
                        next({ ...to, replace: true })
                    } else {
                        // 跳转到目的路由
                        next({ path: redirect })
                    }
                })
            }).catch(()=>{
                notification.error({
                    message: '错误',
                    description: '请求用户信息失败，请重试'
                })
                store.dispatch("Logout").then(()=>{
                    next({ path: loginPath, query: { redirect: to.fullPath } })
                })
            })
        }else{
          next()
        }
    }
  }else {
    if(allowList.includes(to.name)){
      next()
    }else {
      next({ path: loginPath, query: { redirect: to.fullPath } })
        NProgress.done()
    }
  }
  // if(storage.get(ACCESS_TOKEN)){
  //   if(to.path === '/login'){
  //     next({path:'/dashboard'})
  //   }else{
  //
  //   }
  // }
})



router.afterEach(() => {
    NProgress.done() // finish progress bar
})