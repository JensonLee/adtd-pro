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
    totalCount:30,
    totalPage:2,
    data:list
  })
}

const courseList = (opt)=>{
  const body = getBody(opt);
  const list = [];
  for (let i = 0; i < body.pageSize; i++){
    const item = {
      id:"SK-"+(i+1),
      courseName:'静电危害与控制',
      field:"安全",
      tradesClass:'化工',
      courseClass:'职业教育'
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

const uploadCourseList = (opt) => {
  const body = getBody(opt)
  const list = []
  for(let i =0;i<body.pageSize;i++){
    list.push({
      id:Mock.mock('@id'),
      courseId:'SK-'+(i+1),
      couseName:"静电危害与控制",
      img:Mock.mock('@image(63X42)'),
      field:"安全",
      tradesClass:'化工',
      courseType:'视频',
      courseClass:"通用课程",
      responsible:Mock.mock('@cname'),
      createDate:Mock.mock('@date'),
    })
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

Mock.mock('/couse/responsible/course','get',courseList)

Mock.mock('/course/upload/list','get',uploadCourseList)