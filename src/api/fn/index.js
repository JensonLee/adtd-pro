import request from '@/util/request'

export function fnConfig(params){
  return request({
    url:"/fn/config",
    method:'get',
    data:params
  })
}
export function shoppingMallList(params){
    return request({
        url:"/fn/shoppingMallList",
        method:'get',
        data:params
    })
}