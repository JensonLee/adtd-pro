import Mock from 'mockjs'
import {builder, getBody,getQueryParameters} from '../../util'

const advertList = (opt) => {
  const body = getBody(opt);
  const list = [];
  for(let i=0; i<body.pageSize;i++){
    list.push({
      id:Mock.mock('@id'),
      imgOffset:'轮播图',
      showIndex:i+1,
      img:Mock.mock("@image(63X42)"),
      src:'http://www.baidu.com/xyl1.html',
      createDate:Mock.mock("@date")
    })
  }

  /**
   * totalCount 生成20-100之间的随机数
   * totalPage  计算分页数
   */
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

const levelList = (opt) => {
  const body = getBody(opt);
  const list = [
    {
      id:Mock.mock('@id'),
      levelName:'小白',
      integral:'0-99',
      icon:Mock.mock('@image(63X42)'),
      createDate:Mock.mock("@date")
    },
    {
      id:Mock.mock('@id'),
      levelName:'青铜',
      integral:'100-499',
      icon:Mock.mock('@image(63X42)'),
      createDate:Mock.mock("@date")
    },
    {
      id:Mock.mock('@id'),
      levelName:'星耀',
      integral:'500-1999',
      icon:Mock.mock('@image(63X42)'),
      createDate:Mock.mock("@date")
    },
    {
      id:Mock.mock('@id'),
      levelName:'王者',
      integral:'2000-9999',
      icon:Mock.mock('@image(63X42)'),
      createDate:Mock.mock("@date")
    }
  ]
  
  return builder({
    pageSize:10,
    pageNo:1,
    totalCount:4,
    totalPage:1,
    data:list
  })
  
}

const newsList = (opt) => {
  const body = getBody(opt)
  const list = [];
  for(let i=0;i<body.pageSize;i++){
    list.push({
      newsId:Mock.mock('@id'),
      coverImg:Mock.mock('@image(63X42)'),
      newsTitle:Mock.mock('@cparagraph(1)'),
      reading:Math.floor(Math.random()*(1000-300)+300),
      sort:i+1,
      state:Math.round(Math.random()),
      createDate:Mock.mock('@date')
    })
  }

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

const FAQList = (opt) => {
  const body = getBody(opt)
  const list = []
  for(let i=0;i<body.pageSize;i++){
    list.push({
      id:Mock.mock('@id'),
      ask:Mock.mock('@cparagraph(1)'),
      reply:Mock.mock('@cparagraph(1)'),
      askClass:"系统操作",
      addDate:Mock.mock('@date')
    })
  }

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

const messageList = (opt) => {
  const queryParame = getQueryParameters(opt)
  const list = []
  for (let i = 0; i < 10; i++) {
    list.push({
      id:Mock.mock('@id'),
      dateTime:Mock.mock('@dateTime'),
      content:Mock.mock('@cparagraph')
    })
  }

  return builder(list)
}


Mock.mock('/content/advert/list','get',advertList)
Mock.mock('/content/level/list','get',levelList)
Mock.mock('/content/news/list','get',newsList)
Mock.mock('/content/ask/list','get',FAQList)
Mock.mock('/content/message/list','get',messageList)