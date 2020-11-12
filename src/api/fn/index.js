import request from '@/util/request'

export function fnConfig(params){
  return request({
    url:"/fn/config",
    method:'get',
    data:params
  })
}