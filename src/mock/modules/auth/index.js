import Mock from 'mockjs'
import { builder,getBody } from '../../util'

const roleList = (opt)=>{
  const role = [
    {
      id:1,
      roleName:'超级管理员',
      roleDescribe:'最高权限',
      createDate:'2019.10.21',
      uploadDate:'2020.10.01'
    },
    {
      id:2,
      roleName:'管理员',
      roleDescribe:'admin',
      createDate:'2019.10.21',
      uploadDate:'2020.10.01'
    }
  ]
  return builder({
    pageSize:10,
    pageNo:0,
    totalCount:20,
    totalPage:2,
    data:role
  })
}

const userList = (opt)=>{
  const userList = [
    {
      id:1,
      userName:'@cname',
      email:'@email',
      phoneNo:'138292929192',
      roleId:'管理员',
      createDate:'2019.09.18',
      uploadDate:'2020.01.29'
    }
  ]
  return builder({
    pageSize:10,
    pageNo:0,
    totalCount:20,
    totalPage:2,
    data:userList
  })
}


Mock.mock('/auth/roleList','get',roleList)
Mock.mock('/auth/userList','get',userList)