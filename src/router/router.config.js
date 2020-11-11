import layout from '@/layout'

const RouteView = {
    name: 'RouteView',
    render: (h) => h('router-view')
}


export const asyncRouterMap = [
    {
        path:'/',
        component:layout,
        redirect: '/dashboard',
        children:[
            {
                path: '/dashboard',
                name: 'dashboard',
                component: ()=>import('@/views/dashboard/dashboard'),
                meta:{title:'主页',permission:["dashboard"],icon:'appstore'}
            },
            {
              path:'/auth',
              name:'auth',
              redirect:'/auth/user',
              component:RouteView,
              meta:{title:"权限管理",permission:['auth'],icon:"schedule"},
              children:[
                {
                  path:'/auth/role',
                  name:'role',
                  component:()=>import('@/views/auth/role'),
                  meta:{title:'角色管理',permission:['role'],perentPath:'auth'}
                },
                {
                  path:'/auth/user',
                  name:'user',
                  component:()=>import('@/views/auth/user'),
                  meta:{title:'用户管理',permission:['auth'],perentPath:'auth'}
                }
              ]
            },
            {
              path: '/audit',
              name: 'audit',
              component: ()=>import('@/views/audit/audit'),
              meta:{title:'审核管理',permission:["audit"],icon:'eye'}
            },
            {
              path:'/channel',
              name:'channel',
              redirect:'/channel/channel_admin',
              component:RouteView,
              meta:{title:"渠道管理",permission:['channelAdmin'],icon:"schedule"},
              children:[
                {
                  path:'/channel/channel_admin',
                  name:'channel_admin',
                  component:()=>import('@/views/channel_admin/channelAdmin'),
                  meta:{title:'渠道管理员',permission:['channelAdmin'],perentPath:'channel'}
                },
                {
                  path:'/channel/channel_info',
                  name:'channel_info',
                  component:()=>import('@/views/channel_admin/channelInfo'),
                  meta:{title:'渠道信息',permission:['channelInfo'],perentPath:'channel'}
                }
              ]
            },
            {
                path:'/business',
                name:'business',
                redirect:'/business/business_admin',
                component:RouteView,
                meta:{title:'企业管理',permission:["business"],icon:'apartment'},
                children:[
                    {
                        path:'/business/business_admin',
                        name:'business_admin',
                        component:()=>import('@/views/business_admin/businessAdmin'),
                        meta:{title:'企业管理',permission:["business"],parentPath:'business'}
                    },
                    {
                        path:'/business/business_class',
                        name:'business_class',
                        component:()=>import('@/views/business_admin/businessClass'),
                        meta:{title:'企业部门',permission:["businessClass"],parentPath:'business'}
                    },
                    {
                        path:"/business/business_person",
                        name:"business_person",
                        component:()=>import('@/views/business_admin/businessPerson'),
                        meta:{title:'企业员工',permission:["businessPerson"],parentPath:'business'}
                    },
                    {
                        path:"/business/business_file",
                        name:"business_file",
                        component:()=>import('@/views/business_admin/businessFile'),
                        meta:{title:'企业员工',permission:["businessFile"],parentPath:'business'}
                    }
                ]
            },
            {
              path:'/fn',
              name:'fn',
              redirect:'/fn/fn_config',
              component:RouteView,
              meta:{title:"功能配置",permission:['fnConfig'],icon:"schedule"},
              children:[
                {
                  path:'/fn/fn_config',
                  name:'fn_config',
                  component:()=>import('@/views/fn/fnConfig'),
                  meta:{title:'配置管理',permission:['fnConfig'],perentPath:'fn'}
                },
                {
                  path:'/fn/shopping_mall',
                  name:'shopping_mall',
                  component:()=>import('@/views/fn/shoppingMall'),
                  meta:{title:'企业商城',permission:['shoppingMall'],perentPath:'fn'}
                },
                {
                  path:'/fn/contest',
                  name:'contest',
                  component:()=>import('@/views/fn/contest'),
                  meta:{title:'企业竞赛',permission:['contest'],perentPath:'fn'}
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
        path:'/login',
        name:'login',
        component:()=>import('@/views/user/login'),
        meta:{title:"登录"}
    },
    {
        path: '/404',
        component:()=>import('@/views/exception/404')
    }
]