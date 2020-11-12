import Mock from 'mockjs'
import { builder,getBody } from './../../util'

const businessAdmin = (opt) => {
  const body = getBody(opt)
  console.log(body);
  const businessAdminTable= [
    {
        key:'0',
        business_name:'中国银联',
        channel:'政府类企业',
        industry:'化工',
        state:'到期',
        businessPersonNum:'200',
        surplus:'0',
        expiry_date:'2018-08-23',
        create_date:'2017-06-09',
        upload_date:'2019-09-10'
    },
    {
        key:'1',
        business_name:'中国银联',
        channel:'政府类企业',
        industry:'化工',
        state:'到期',
        surplus:'0',
        businessPersonNum:'30987',
        expiry_date:'2018-08-23',
        create_date:'2017-06-09',
        upload_date:'2019-09-10'
    }
]
    return builder({
      pageSize:10,
      pageNo:1,
      totalCount:20,
      totalPage:2,
      data:businessAdminTable
    })
}




Mock.mock("/business/admin", 'get', businessAdmin)