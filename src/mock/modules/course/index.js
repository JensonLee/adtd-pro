import Mock from 'mockjs'
import {builder,getBody} from '../../util'

/**
 * 课程负责人
 */
const headOfCourse = (opt)=>{
  const body = getBody(opt)
  const list = []
  const gender = ['男','女']
  for (let i = 0; i < body.pageSize; i++) {
    const item = {
      id:Mock.mock('@id'),
      username:Mock.mock('@name'),
      cname:Mock.mock('@cname'),
      gender:gender[Math.round(Math.random())],
      phoneNo:Mock.mock('12367889010')
    };
    list.push(item)
    
  }
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:20,
    totalPage:2,
    data:list
  })
}

Mock.mock('/course/responsible','get',headOfCourse)