import request from '@/util/request'

export function courseResponsible(parames){
    return request({
        url:'/course/responsible',
        method:'get',
        data:parames
    })
}

export function getCourse(params){
  return request({
    url:"/couse/responsible/course",
    method:"get",
    data:params
  })
}
export function uploadCourseList(params){
  return request({
    url:"/course/upload/list",
    method:"get",
    data:params
  })
}