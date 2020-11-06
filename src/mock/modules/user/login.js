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
    return builder({
        "roleId":roleId,
    })
}

const logout = () => {
    return builder({}, '[测试接口] 注销成功')
}

Mock.mock("/login", 'post', login)
Mock.mock("/userInfo","post",info)
Mock.mock(/\/logout/, 'post', logout)