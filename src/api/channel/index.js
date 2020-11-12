import request from '@/util/request'

export function getChannelList(params){
  return request({
    url:'/channel/list',
    method:'get',
    data:params
  })
}

export function getChnnelInfo(params){
  return request({
    url:'/channel/info',
    method:'get',
    data:params
  })
}