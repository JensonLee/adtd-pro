import request from '@/util/request'

export function getAdvertList(params){
  return request({
    url:'/content/advert/list',
    method:'get',
    data:params
  })
}

export function getLevelList(params){
  return request({
    url:'/content/level/list',
    method:'get',
    data:params
  })
}

export function getNewsList(params){
  return request({
    url:'/content/news/list',
    method:'get',
    data:params
  })
}

export function getFAQList(params){
  return request({
    url:'/content/ask/list',
    method:'get',
    data:params
  })
}

export function getMessageList(params){
  return request({
    url:'/content/message/list',
    method:'get',
    data:params
  })
}