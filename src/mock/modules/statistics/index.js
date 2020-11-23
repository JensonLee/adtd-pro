import Mock from 'mockjs'
import {builder, getBody} from '../../util'

/**
 * 数据汇总头部显示概况
 * @param {*} opt 
 */
const collectViews = (opt) =>{
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}

/**
 * 数据汇总企业列表
 * @param {*} opt 
 */
const collectBusinessList = (opt) => {
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}

/**
 * 课程统计课程学习列表
 * @param {*} opt 
 */
const courseStudyList = (opt) => {
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}

/**
 * 课程统计购买课程列表
 * @param {*} opt 
 */
const courseBuyList = (opt) => {
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}

/**
 * 负责人课程统计列表
 * @param {*} opt 
 */
const responsibleCourseList = (opt) => {
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}

/**
 * 课程购买统计列表
 * @param {*} opt 
 */
const buyCourseList = (opt) => {
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}

/**
 * 在线学员统计列表
 * @param {*} opt 
 */
const onlineStudentsList = (opt) => {
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}

/**
 * 历史在线列表
 * @param {*} opt 
 */
const historyOnlineList = (opt) => {
  const body = getBody(opt)
  const list = []

  const totalCount  = Math.floor(Math.random()*(100-20+1)+20)
  const totalPage = Math.ceil(totalCount/body.pageSize);
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:totalCount,
    totalPage:totalPage,
    data:list
  }) 
}


Mock.mock('/statistics/collect/views','get',collectViews)
Mock.mock('/statistics/collect/business/list','get',collectBusinessList)
Mock.mock('/statistics/collect/course/study','get',courseStudyList)
Mock.mock('/statistics/collect/course/buy','get',courseBuyList)
Mock.mock('/statistics/collect/course/responsible','get',responsibleCourseList)
Mock.mock('/statistics/collect/course/buy/list','get',buyCourseList)
Mock.mock('/statistics/collect/course/onlone/students','get',onlineStudentsList)
Mock.mock('/statistics/collect/course/onlone/history','get',historyOnlineList)