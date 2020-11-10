import Mock from 'mockjs'
import { builder, getBody } from './../../util'

const username = ['admin','user_admin']
const password = ['admin'] // admin, ant.design
let roleId = 'admin'
const login = (options) => {
    const body = getBody(options)
    console.log('mock: body', body)
    console.log(username.includes(body.username))
    if (!username.includes(body.username) || !password.includes(body.password)) {
        return builder({ isLogin: true }, '账户或密码错误', 401)
    }
    roleId=body.username
    return builder({
        'username': body.username,
        'telephone': '',
        'roleId': body.username,
        'token': '4291d7da9005377ec9aec4a71ea837f'
    }, '', 200, { 'Custom-Header': Mock.mock('@guid') })
}

const info = ()=>{
    const userInfo = {
      "roleId":roleId,
      "username":'上格瑞迈教育',
      "role":{}
    }
    const roleObj = {
      'id': 'admin',
      'name': '管理员',
      'describe': '拥有所有权限',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'dashboard',
        'permissionName': '仪表盘',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        }, {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        }, {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }, {
          'action': 'update',
          'describe': '修改',
          'defaultCheck': false
        }, {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }],
        'actionList': null,
        'dataAccess': null
      },{
        'roleId': 'admin',
        'permissionId': 'business',
        'permissionName': '企业管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        }, {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        }, {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }, {
          'action': 'update',
          'describe': '修改',
          'defaultCheck': false
        }, {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }],
        'actionList': null,
        'dataAccess': null
      },{
        'roleId': 'admin',
        'permissionId': 'businessClass',
        'permissionName': '企业部门',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        }, {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        }, {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }, {
          'action': 'update',
          'describe': '修改',
          'defaultCheck': false
        }, {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }],
        'actionList': null,
        'dataAccess': null
      },{
        'roleId': 'admin',
        'permissionId': 'businessPerson',
        'permissionName': '企业员工',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        }, {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        }, {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }, {
          'action': 'update',
          'describe': '修改',
          'defaultCheck': false
        }, {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }],
        'actionList': null,
        'dataAccess': null
      }]
    }

    // roleObj.permissions.push({
    //   'roleId': 'admin',
    //   'permissionId': 'support',
    //   'permissionName': '超级模块',
    //   'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
    //   'actionEntitySet': [{
    //     'action': 'add',
    //     'describe': '新增',
    //     'defaultCheck': false
    //   }, {
    //     'action': 'import',
    //     'describe': '导入',
    //     'defaultCheck': false
    //   }, {
    //     'action': 'get',
    //     'describe': '详情',
    //     'defaultCheck': false
    //   }, {
    //     'action': 'update',
    //     'describe': '修改',
    //     'defaultCheck': false
    //   }, {
    //     'action': 'delete',
    //     'describe': '删除',
    //     'defaultCheck': false
    //   }, {
    //     'action': 'export',
    //     'describe': '导出',
    //     'defaultCheck': false
    //   }],
    //   'actionList': null,
    //   'dataAccess': null
    // })
    userInfo.role = roleObj
    return builder(userInfo)
}

const logout = () => {
    return builder({},'',200, '[测试接口] 注销成功')
}

Mock.mock("/login", 'post', login)
Mock.mock("/userInfo","post",info)
Mock.mock(/\/logout/, 'post', logout)