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
      },{
        'roleId': 'admin',
        'permissionId': 'businessFile',
        'permissionName': '企业空间文件',
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
        'permissionId': 'auth',
        'permissionName': '用户管理',
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
        'permissionId': 'role',
        'permissionName': '角色管理',
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
        'permissionId': 'audit',
        'permissionName': '审核管理',
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
        'permissionId': 'channelAdmin',
        'permissionName': '渠道管理',
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
        'permissionId': 'channelInfo',
        'permissionName': '渠道信息',
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
        'permissionId': 'fnConfig',
        'permissionName': '配置管理',
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
        'permissionId': 'shoppingMall',
        'permissionName': '企业商城',
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
        'permissionId': 'contest',
        'permissionName': '企业竞赛',
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
        'permissionId': 'renewalRecord',
        'permissionName': '企业续约记录',
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
        'permissionId': 'rechargeRecord',
        'permissionName': '上格币充值记录',
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
        'permissionId': 'buyRecord',
        'permissionName': '课程购买记录',
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
        'permissionId': 'tradesClass',
        'permissionName': '行业类别',
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
        'permissionId': 'subjectClass',
        'permissionName': '课程类别',
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
        'permissionId': 'headOfSubject',
        'permissionName': '课程负责人',
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
        'permissionId': 'uploadEdit',
        'permissionName': '上传编辑',
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
        'permissionId': 'advertAdmin',
        'permissionName': '广告管理',
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
        'permissionId': 'levelAdmin',
        'permissionName': '等级头衔',
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
        'permissionId': 'newsAdmin',
        'permissionName': '咨询管理',
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
        'permissionId': 'FAQ',
        'permissionName': 'FAQ管理',
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
        'permissionId': 'messageAdmin',
        'permissionName': '消息',
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
        'permissionId': 'documentsClass',
        'permissionName': '资料分类',
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
        'permissionId': 'documentsAdmin',
        'permissionName': '资料管理',
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
        'permissionId': 'collectStatistics',
        'permissionName': '数据汇总',
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
        'permissionId': 'courseStatistics',
        'permissionName': '课程统计',
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
        'permissionId': 'responsibleCourse',
        'permissionName': '负责人课程统计',
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
        'permissionId': 'buyCourseStatistics',
        'permissionName': '课程购买统计',
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
        'permissionId': 'onlineStudentsStatistics',
        'permissionName': '在线学员统计',
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
        'permissionId': 'messageSettingSystem',
        'permissionName': '企业到期消息提醒设置',
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
        'permissionId': 'IPBlacklist',
        'permissionName': 'IP黑名单',
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
        'permissionId': 'systemLog',
        'permissionName': '日志管理',
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
        'permissionId': 'systemInfo',
        'permissionName': '系统信息',
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
        'permissionId': 'certificateEdit',
        'permissionName': '证书编辑',
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