import Mock from 'mockjs'
import { builder } from '../../util'


const auditList = (opt)=>{
  console.log(opt)
  const auditList = [
    {
      id:1,
      businessName:'寿光宏宇化工有限公司',
      contact:'张三',
      recommender:'李四',
      phoneNo:"12367889010",
      email:'12345678@163.com',
      upDate:'2020.10.30',
      marks:'',
      state:'0',
      stateText:'待审批'
    },
    {
      id:2,
      businessName:'寿光宏宇化工有限公司',
      contact:'张三',
      recommender:'李四',
      phoneNo:"12367889010",
      email:'12345678@163.com',
      upDate:'2020.10.30',
      marks:'备注的',
      state:'1',
      stateText:'审批通过'
    }
  ]
  return builder({
    pageSize:10,
    pageNo:0,
    totalCount:20,
    totalPage:2,
    data:auditList
  })
}

Mock.mock('/audit','get',auditList)