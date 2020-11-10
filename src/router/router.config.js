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
                meta:{title:'主页',permission:["dashboard"]}
            },
            {
                path:'/business',
                name:'business',
                redirect:'/business/business_admin',
                component:RouteView,
                meta:{title:'企业管理',permission:["business"]},
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
                        meta:{title:'企业员工',permission:["businessPerson"],parentPath:'business'},
                        hidden:true
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