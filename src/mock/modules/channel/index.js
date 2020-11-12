import Mock from 'mockjs'
import { builder } from '../../util'


const channelList = (opt)=>{
  const channelList = [
    {
      id:1,
      channel:'上格咨询',
      username:'zhangsan',
      contact:'张三',
      phoneNo:'12367889010',
      createDate:'2020.10.09',
      uploadDate:'2020.11.27'
    }
  ]

  return builder({
    pageSize:10,
    pageNo:1,
    totalCount:20,
    totalPage:2,
    data:channelList
  })
}

const infoList = (opt) =>{
  const infoList = [
    {
      id:1,
      channelName:'上格咨询',
      createDate:'2016-09-21',
      uploadDate:'2016-09-21'
    },
    {
      id:2,
      channelName:'下格咨询',
      createDate:'2016-09-21',
      uploadDate:'2016-09-21'
    }
  ]

  return builder({
    pageSize:10,
    pageNo:1,
    totalCount:20,
    totalPage:2,
    data:infoList
  })
}

Mock.mock('/channel/list','get',channelList)
Mock.mock('/channel/info','get',infoList)