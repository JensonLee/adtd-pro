import layout from '@/layout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}


export const asyncRouterMap = [
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        meta: {title: '主页', permission: ["dashboard"], icon: 'appstore'}
      },
      {
        path: '/auth',
        name: 'auth',
        redirect: '/auth/user',
        component: RouteView,
        meta: {title: "权限管理", permission: ['auth'], icon: "schedule"},
        children: [
          {
            path: '/auth/role',
            name: 'role',
            component: () => import('@/views/auth/role'),
            meta: {title: '角色管理', permission: ['role'], parentPath: 'auth'}
          },
          {
            path: '/auth/user',
            name: 'user',
            component: () => import('@/views/auth/user'),
            meta: {title: '用户管理', permission: ['user'], parentPath: 'auth'}
          }
        ]
      },
      {
        path: '/audit',
        name: 'audit',
        component: () => import('@/views/audit/audit'),
        meta: {title: '审核管理', permission: ["audit"], icon: 'eye'}
      },
      {
        path: '/channel',
        name: 'channel',
        redirect: '/channel/channel_admin',
        component: RouteView,
        meta: {title: "渠道管理", permission: ['channelAdmin'], icon: "tags"},
        children: [
          {
            path: '/channel/channel_admin',
            name: 'channel_admin',
            component: () => import('@/views/channel_admin/channelAdmin'),
            meta: {title: '渠道管理员', permission: ['channelAdmin'], parentPath: 'channel'}
          },
          {
            path: '/channel/channel_info',
            name: 'channel_info',
            component: () => import('@/views/channel_admin/channelInfo'),
            meta: {title: '渠道信息', permission: ['channelInfo'], parentPath: 'channel'}
          }
        ]
      },
      {
        path: '/business',
        name: 'business',
        redirect: '/business/business_admin',
        component: RouteView,
        meta: {title: '企业管理', permission: ["business"], icon: 'apartment'},
        children: [
          {
            path: '/business/business_admin',
            name: 'business_admin',
            component: () => import('@/views/business_admin/businessAdmin'),
            meta: {title: '企业管理', permission: ["business"], parentPath: 'business'}
          },
          {
            path: '/business/business_class',
            name: 'business_class',
            component: () => import('@/views/business_admin/businessClass'),
            meta: {title: '企业部门', permission: ["businessClass"], parentPath: 'business'}
          },
          {
            path: "/business/business_person",
            name: "business_person",
            component: () => import('@/views/business_admin/businessPerson'),
            meta: {title: '企业员工', permission: ["businessPerson"], parentPath: 'business'}
          },
          {
            path: "/business/business_file",
            name: "business_file",
            component: () => import('@/views/business_admin/businessFile'),
            meta: {title: '企业空间文件', permission: ["businessFile"], parentPath: 'business'}
          }
        ]
      },
      {
        path: '/fn',
        name: 'fn',
        redirect: '/fn/fn_config',
        component: RouteView,
        meta: {title: "功能配置", permission: ['fnConfig'], icon: "api"},
        children: [
          {
            path: '/fn/fn_config',
            name: 'fn_config',
            component: () => import('@/views/fn/fnConfig'),
            meta: {title: '配置管理', permission: ['fnConfig'], parentPath: 'fn'}
          },
          {
            path: '/fn/shopping_mall',
            name: 'shopping_mall',
            component: () => import('@/views/fn/shoppingMall'),
            meta: {title: '企业商城', permission: ['shoppingMall'], parentPath: 'fn'}
          },
          {
            path: '/fn/contest',
            name: 'contest',
            component: () => import('@/views/fn/contest'),
            meta: {title: '企业竞赛', permission: ['contest'], parentPath: 'fn'}
          }
        ]
      },
      {
        path: '/finance',
        name: 'finance',
        redirect: '/finance/renewal_record',
        component: RouteView,
        meta: {title: "财务管理", permission: ['renewalRecord'], icon: "account-book"},
        children: [
          {
            path: '/finance/renewal_record',
            name: 'renewal_record',
            component: () => import('@/views/finance/renewalRecord'),
            meta: {title: '企业续约记录', permission: ['renewalRecord'], parentPath: 'finance'}
          },
          {
            path: '/finance/recharge_record',
            name: 'recharge_record',
            component: () => import('@/views/finance/rechargeRecord'),
            meta: {title: '上格币充值记录', permission: ['rechargeRecord'], parentPath: 'finance'}
          },
          {
            path: '/finance/buy_record',
            name: 'buy_record',
            component: () => import('@/views/finance/buyRecord'),
            meta: {title: '课程购买记录', permission: ['buyRecord'], parentPath: 'finance'}
          }
        ]
      },
      {
        path: '/subject_admin',
        name: 'subject_admin',
        component: RouteView,
        redirect: '/subject_admin/trades_class',
        meta: {title: '课程管理', permission: ['tradesClass'], icon: 'reconciliation'},
        children: [
          {
            path: '/subject_admin/trades_class',
            name: 'trades_class',
            component: () => import('@/views/subject_admin/tradesClass'),
            meta: {title: '行业类别', permission: ['tradesClass'], parentPath: 'subject_admin'}
          },
          {
            path: '/subject_admin/subject_class',
            name: 'subject_class',
            component: () => import('@/views/subject_admin/subjectClass'),
            meta: {title: '课程类别', permission: ['subjectClass'], parentPath: 'subject_admin'}
          },
          {
            path: '/subject_admin/head_of_subject',
            name: 'head_of_subject',
            component: RouteView,
            meta: {title: '课程负责人', permission: ['headOfSubject'], parentPath: 'subject_admin'},
            redirect: '/subject_admin/head_of_subject/responsible',
            children: [
              {
                path: '/subject_admin/head_of_subject/responsible',
                name: 'head_of_subject_responsible',
                component: () => import('@/views/subject_admin/headOfSubject'),
                meta: {title: '课程负责人', permission: ['headOfSubject'], parentPath: 'subject_admin'}
              },
              {
                path: "/subject_admin/head_of_subject/responsible/course",
                name: 'head_of_subject_course',
                component: () => import('@/views/subject_admin/components/course'),
                meta: {title: '负责课程', permission: ['headOfSubject'], parentPath: 'subject_admin'}
              }
            ]
          },
          {
            path: '/subject_admin/upload',
            name: 'uploadSuject',
            component: () => import('@/views/subject_admin/upload'),
            meta: {title: '上传编辑', permission: ['uploadEdit'], parentPath: 'subject_admin'},
            children: [
              {
                path: '/subject_admin/upload/list/preview',
                name: 'coursePreview',
                component: () => import('@/views/subject_admin/components/preview'),
                meta: {title: '预览', permission: ['uploadEdit'], parentPath: 'subject_admin'}
              },
              {
                path: '/subject_admin/upload/list/create',
                name: 'courseCreated',
                component: () => import('@/views/subject_admin/components/createCourse'),
                meta: {title: '新建', permission: ['uploadEdit'], parentPath: 'subject_admin'}
              }
            ]
          }
        ]
      },
      {
        path: '/content',
        name: 'content',
        component: RouteView,
        redirect: '/content/advert',
        meta: {title: '内容管理', permission: ['advertAdmin'], icon: 'container'},
        children: [
          {
            path: '/content/advert',
            name: 'advert_admin',
            component: () => import('@/views/content/advert'),
            meta: {title: '广告管理', permission: ['advertAdmin'], parentPath: 'content'}
          },
          {
            path: '/content/level',
            name: 'level_admin',
            component: () => import('@/views/content/level'),
            meta: {title: '等级头衔', permission: ['levelAdmin'], parentPath: 'content'}
          },
          {
            path: '/content/news',
            name: 'news_admin',
            component: () => import('@/views/content/news'),
            meta: {title: '咨询管理', permission: ['newsAdmin'], parentPath: 'content'}
          },
          {
            path: '/content/FAQ',
            name: 'FAQ',
            component: () => import('@/views/content/FAQ'),
            meta: {title: 'FAQ管理', permission: ['FAQ'], parentPath: 'content'}
          },
          {
            path: '/content/message',
            name: 'message_admin',
            component: () => import('@/views/content/message'),
            meta: {title: '消息', permission: ['messageAdmin'], parentPath: 'content'}
          }
        ]
      },
      {
        path: '/documents',
        name: 'documents',
        component: RouteView,
        redirect: '/documents/admin',
        meta: {title: '资料管理', permission: ['documentsAdmin'], icon: 'folder-open'},
        children: [
          {
            path: '/documents/class',
            name: 'documents_class',
            component: () => import('@/views/documents/documentsClass'),
            meta: {title: '资料分类', permission: ['documentsClass'], parentPath: 'documents'}
          },
          {
            path: '/documents/admin',
            name: 'documents_admin',
            component: () => import('@/views/documents/documentsAdmin'),
            meta: {title: '资料管理', permission: ['documentsAdmin'], parentPath: 'documents'}
          }
        ]
      },
      {
        path: '/statistics',
        name: 'statistics',
        component: RouteView,
        redirect: '/statistics/collect',
        meta: {title: '数据汇总', permission: ['collectStatistics'], icon: 'deployment-unit'},
        children: [
          {
            path: '/statistics/collect',
            name: 'collect_statistics',
            component: () => import('@/views/statistics/collect'),
            meta: {title: '数据汇总', permission: ['collectStatistics'], parentPath: 'statistics'}
          },
          {
            path: '/statistics/course',
            name: 'course_statistics',
            component: () => import('@/views/statistics/course'),
            meta: {title: '课程统计', permission: ['courseStatistics'], parentPath: 'statistics'}
          },
          {
            path: '/statistics/responsible_course',
            name: 'responsible_course',
            component: () => import('@/views/statistics/responsibleCourse'),
            meta: {title: '负责人课程统计', permission: ['responsibleCourse'], parentPath: 'statistics'}
          },
          {
            path: '/statistics/buy_course',
            name: 'buy_course_statistics',
            component: () => import('@/views/statistics/buyCourse'),
            meta: {title: '课程购买统计', permission: ['buyCourseStatistics'], parentPath: 'statistics'}
          },
          {
            path: '/statistics/online_students',
            name: 'online_students_statistics',
            component: () => import('@/views/statistics/onlineStudents'),
            meta: {title: '在线学员统计', permission: ['onlineStudentsStatistics'], parentPath: 'statistics'}
          }
        ]
      },
      {
        path: '/system',
        name: 'system',
        component: RouteView,
        redirect: '/system/info',
        meta: {title: '系统管理', permission: ['systemInfo'], icon: 'setting'},
        children: [
          {
            path: '/system/message_setting',
            name: 'message_setting',
            component: () => import('@/views/system/messageSetting'),
            meta: {title: '企业到期消息提醒设置', permission: ['messageSettingSystem'], parentPath: 'system'}
          },
          {
            path: '/system/IP_blacklist',
            name: 'IP_blacklist',
            component: () => import('@/views/system/IPBlacklist'),
            meta: {title: 'IP黑名单', permission: ['IPBlacklist'], parentPath: 'system'}
          },
          {
            path: '/system/log',
            name: 'system_log',
            component: () => import('@/views/system/log'),
            meta: {title: '日志管理', permission: ['systemLog'], parentPath: 'system'}
          },
          {
            path: '/system/info',
            name: 'system_info',
            component: () => import('@/views/system/info'),
            meta: {title: "系统信息", permission: ['systemInfo'], parentPath: 'system'}
          },
          {
            path: '/system/certificate_edit',
            name: 'certificate_edit',
            component: () => import('@/views/system/certificateEdit'),
            meta: {title: '证书编辑', permission: ['certificateEdit'], parentPath: 'system'}
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]


export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login'),
    meta: {title: "登录"}
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  }
]