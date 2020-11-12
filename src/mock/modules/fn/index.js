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
          dataFn:true,
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
          dataFn:true,
          fileFn:'1',
          everyDayTestFn:'0',
          shoppingMallFn:'0'
        }
      }
    ]
  })
}

Mock.mock('/fn/config','get',fnInfo)