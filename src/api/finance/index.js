import request from '@/util/request'

export function getRenewalRecordList(params){
  return request({
    url:'/finance/renewal',
    method:'get',
    data:params
  })
}
export function getRechargeRecordList(params){
  return request({
    url:'/finance/recharge',
    method:'get',
    data:params
  })
}
export function getBuyRecordList(params){
  return request({
    url:'/finance/buy',
    method:'get',
    data:params
  })
}