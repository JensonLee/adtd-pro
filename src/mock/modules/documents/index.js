import Mock from 'mockjs'
import {builder, getBody} from '../../util'


const documentsList = (opt) =>{
  const body = getBody(opt)
  const list = []
  const title = ['离婚协议书','股权转让协议','合作协议.doc','凭租合同','股东入股合作协议书']
  for(let i=0;i<body.pageSize;i++){
    list.push({
      id:Mock.mock('@id'),
      coverImg:Mock.mock('@image(63X42)'),
      title:title[parseInt(Math.random()*(4+1),10)],
      describe:title[parseInt(Math.random()*(4+1),10)],
      docClass:"通用综合",
      addDate:Mock.mock('@date'),
      reading:Math.floor(Math.random()*(10000-200)+200)
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

Mock.mock('/documents/list','get',documentsList)
