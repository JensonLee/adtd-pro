import request from '@/util/request'

export function getAuditList(parames){
    return request({
        url:'/audit',
        method:'get',
        data:parames
    })
}