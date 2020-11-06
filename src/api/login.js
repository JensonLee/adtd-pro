import request from '@/util/request'

export function login(parames) {
    return request({
        url:'/login',
        method:"post",
        data:parames
    })
}

export function getUserInfo() {
    return request({
        url:"/userInfo",
        method:"post",
        data:''
    })
}

export function logout(params) {
    return request({
        url:'/logout',
        method:"post",
        data:params
    })
}