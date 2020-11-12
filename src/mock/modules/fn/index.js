import Mock from 'mockjs'
import { builder } from '../../util'

const fnInfo = (opt) => {
  
  return builder({
    pageSize:10,
    pageNo:1,
    totalCount:20,
    totalPage:2,
    data:[
      {
        id:1,
        businessName:'寿光宏宇化工有限公司',
        fnStaus:{
          contestFn:'0',
          dataFn:'1',
          fileFn:'0',
          everyDayTestFn:'0',
          shoppingMallFn:'0'
        }
      },
      {
        id:2,
        businessName:'山东旭锐新材有限公司',
        fnStaus:{
          contestFn:'1',
          dataFn:'0',
          fileFn:'1',
          everyDayTestFn:'0',
          shoppingMallFn:'0'
        }
      }
    ]
  })
}

const shoppingMallList = (opt)=>{
  return builder({
      pageSize:10,
      pageNo:1,
      totalCount:20,
      totalPage:2,
      data:[
          {
              businessName:'寿光宏宇化工有限公司',
              commodityId:'380',
              commodityName:'百事可乐1瓶',
              commodityImg:Mock.mock('@image(200X100)'),
              scoring:'80',
              addDate:'2020-10-01',
              status:'1'
          },
          {
              businessName:'浙江省海翔药业',
              commodityId:'381',
              commodityName:'可口可乐1瓶',
              commodityImg:Mock.mock('@image(200X100)'),
              scoring:'90',
              addDate:'2020-10-01',
              status:'0'
          }
      ]
  })
}

const contestList = (opt) =>{
  return builder({
      pageSize:10,
      pageNo:1,
      totalCount:20,
      totalPage:2,
      data:[
          {
              businessName:'寿光宏宇化工有限公司',
              contestId:'380',
              contestName:'蒸汽水锤的危害及控制',
              createDate:'2019-12-21',
              contestImg:Mock.mock('@image(200X100)'),
              scoring:'80',
              startDate:'2020-10-01',
              endDate:'2020-11-12'
          },
          {
              businessName:'浙江省海翔药业',
              contestId:'381',
              contestName:'事故根源分析（基础篇）',
              createDate:'2019-12-21',
              contestImg:Mock.mock('@image(200X100)'),
              scoring:'88',
              startDate:'2020-10-01',
              endDate:'2020-11-12'
          }
      ]
  })
}

Mock.mock('/fn/config','get',fnInfo)
Mock.mock('/fn/shoppingMallList','get',shoppingMallList)
Mock.mock('/fn/contestList','get',contestList)