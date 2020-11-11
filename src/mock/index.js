

const Mock = require('mockjs')

require('./modules/user/login')
require('./modules/auth')
require('./modules/audit')
require('./modules/business')



Mock.setup({
    timeout: 800 // setter delay time
})