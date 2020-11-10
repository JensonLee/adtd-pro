import Mock from 'mockjs'
import { builder,getBody } from './../../util'

const businessAdmin = (opt) => {
  const body = getBody(opt)
  console.log(body);
    return builder({
        businessAdminTable:[
            {
                key:'0',
                business_name:'中国银联',
                channel:'政府类企业',
                industry:'化工',
                state:'到期',
                surplus:'0',
                expiry_date:'2018-08-23',
                create_date:'2017-06-09'
            },
            {
                key:'1',
                business_name:'中国银联',
                channel:'政府类企业',
                industry:'化工',
                state:'到期',
                surplus:'0',
                expiry_date:'2018-08-23',
                create_date:'2017-06-09'
            }
        ]
    })
}



Mock.mock("/business/admin", 'post', businessAdmin)