import request from '@/util/request'

export function getRoleList(parames){
    return request({
        url:'/auth/roleList',
        method:'get',
        data:parames
    })
}

export function getUserList(parames){
  return request({
    url:'/auth/userList',
    method:'get',
    data:parames
  })
}