import request from '@/util/request'

export function businessAdminTable(parames){
    return request({
        url:'/business/admin',
        method:'post',
        data:parames
    })
}