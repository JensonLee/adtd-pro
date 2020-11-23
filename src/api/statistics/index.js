import request from '@/util/request'

export function collectViews(params){
  return request({
    url:'/statistics/collect/views',
    method:'get',
    data:params
  })
}
export function collectBusinessList(params){
  return request({
    url:'/statistics/collect/business/list',
    method:'get',
    data:params
  })
}
export function courseStudyList(params){
  return request({
    url:'/statistics/collect/course/study',
    method:'get',
    data:params
  })
}
export function courseBuyList(params){
  return request({
    url:'/statistics/collect/course/buy',
    method:'get',
    data:params
  })
}
export function responsibleCourseList(params){
  return request({
    url:'/statistics/collect/course/responsible',
    method:'get',
    data:params
  })
}
export function buyCourseList(params){
  return request({
    url:'/statistics/collect/course/buy/list',
    method:'get',
    data:params
  })
}
export function onlineStudentsList(params){
  return request({
    url:'/statistics/collect/course/onlone/students',
    method:'get',
    data:params
  })
}
export function historyOnlineList(params){
  return request({
    url:'/statistics/collect/course/onlone/history',
    method:'get',
    data:params
  })
}