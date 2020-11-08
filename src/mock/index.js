

const Mock = require('mockjs')

require('./modules/user/login')
require('./modules/business')



Mock.setup({
    timeout: 800 // setter delay time
})