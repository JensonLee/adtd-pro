import request from '@/util/request'

export function getDocumentsList(params){
  return request({
    url:'/documents/list',
    method:'get',
    data:params
  })
}