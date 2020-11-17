import request from '@/util/request'

export function courseResponsible(parames){
    return request({
        url:'/course/responsible',
        method:'get',
        data:parames
    })
}