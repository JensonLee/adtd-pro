import storage from 'store'
import { login,getUserInfo,logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/assets.config'
import {asyncRouterMap,constantRouterMap} from '@/router/router.config'




function hasPermission (roles, route) {
    if (route.meta && route.meta.permission) {
        let flag = false
        flag = route.meta.permission.includes(roles)
        if (flag) {
            return true
        }
        return false
    }
    return true
}
function filterAsyncRouter (routerMap, roles) {
    const accessedRouters = routerMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}


const user = {
    state:{
        token: '',
        roleId:'',
        addRouter:[],
        router:[]
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token = token
        },
        SET_ROLEID:(state,roleId)=>{
            state.roleId = roleId
        },
        SET_ROUTER:(state,router)=>{
            state.addRouter = router
            state.router = constantRouterMap.concat(router)
        }
    },
    actions:{
        Login({commit},info){
            return new Promise((resolve,reject)=>{
                login(info).then(res=>{
                    const result = res.result
                    commit('SET_TOKEN',result.token)
                    storage.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetUserInfo({commit}){
            return new Promise((resolve,reject)=>{
                getUserInfo().then(res=>{
                    const result = res.result
                    commit('SET_ROLEID',result.roleId)
                    resolve(res)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GenerateRoutes({commit},roleId){
            return new Promise(resolve=>{
                console.log(roleId);
                const accessedRouters = filterAsyncRouter(asyncRouterMap,roleId)
                commit('SET_ROUTER',accessedRouters)
                resolve()
            })
        },
        Logout({commit,state}){
            new Promise((resolve,reject)=>{
                logout(state.token).then(res=>{
                    console.log(res);
                    commit('SET_TOKEN',"")
                    commit('SET_ROLEID',"")
                    storage.remove(ACCESS_TOKEN)
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })

        }
    }
}
export default user