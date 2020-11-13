import Mock from 'mockjs'
import {builder,getBody} from '../../util'


const renewalRecordList = (opt)=>{
  const body = getBody(opt)
  const recordList = [
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'寿光宏宇化工有限公司',
      date:Mock.mock('@date'),
      endDate:Mock.mock('@date'),
      describe:'企业已续费'
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'浙江省海翔药业',
      date:Mock.mock('@date'),
      endDate:Mock.mock('@date'),
      describe:'企业购买每日一测'
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      endDate:Mock.mock('@date'),
      describe:'企业购买每日一测'
    }
  ]
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:20,
    totalPage:2,
    data:recordList
  })
}

const rechargeRecordList = (opt)=>{
  const body = getBody(opt)
  const recordList = [
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    },
    {
      regardingId:'AD'+Mock.mock('@guid'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      rechargeNumber:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(90000,100000)')
    }
  ]
  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:20,
    totalPage:2,
    data:recordList
  })
}

const buyRecordList = (opt)=>{
  const body = getBody(opt)
  const num = body.pageSize;
  let listArr = []
  for(let i=0;i<num;i++){
    listArr.push({
      regardingId:'AD'+Mock.mock('@id'),
      businessName:'山东旭锐新材有限公司',
      date:Mock.mock('@date'),
      courseName:Mock.mock('@cparagraph(1)'),
      dateTo:Mock.mock('@date')+' ~ '+Mock.mock('@date'),
      amount:Mock.mock('@integer(1000,9999)'),
      balance:Mock.mock('@integer(10000,99999)')
    })
  }

  return builder({
    pageSize:body.pageSize,
    pageNo:body.pageNo,
    totalCount:20,
    totalPage:2,
    data:listArr
  })
}

Mock.mock('/finance/renewal','get',renewalRecordList)
Mock.mock('/finance/recharge','get',rechargeRecordList)
Mock.mock('/finance/buy','get',buyRecordList)