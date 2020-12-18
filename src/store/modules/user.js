import storage from 'store'
import {login, getUserInfo, logout} from '@/api/login'
import {ACCESS_TOKEN} from '@/store/assets.config'
import {asyncRouterMap, constantRouterMap} from '@/router/router.config'

function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles.permissionList, route)) {
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
  state: {
    token: '',
    roleId: '',
    addRouter: [],
    router: [],
    userName: '',
    roles: [],
    info: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLEID: (state, roleId) => {
      state.roleId = roleId
    },
    SET_ROUTER: (state, router) => {
      state.addRouter = router
      state.router = constantRouterMap.concat(router)
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },
  actions: {
    Login({commit}, info) {
      return new Promise((resolve, reject) => {
        login(info).then(res => {
          const result = res.result
          commit('SET_TOKEN', result.token)
          storage.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUserInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          const result = res.result
          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => {
                  return action.action
                })
                per.actionList = action
              }
            })
            role.permissionList = role.permissions.map(permission => {
              return permission.permissionId
            })
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
          }
          commit('SET_ROLEID', result.roleId)
          commit('SET_USERNAME', result.username)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GenerateRoutes({commit}, role) {
      console.log(asyncRouterMap[0].children);
      return new Promise(resolve => {
        const {roles} = role
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        commit('SET_ROUTER', accessedRouters)
        resolve()
      })
    },
    Logout({commit, state}) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
          commit('SET_TOKEN', "")
          commit('SET_ROLEID', "")
          storage.remove(ACCESS_TOKEN)
        })
      })

    }
  }
}
export default user
