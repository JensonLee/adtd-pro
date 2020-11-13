

const Mock = require('mockjs')

require('./modules/user/login')
require('./modules/auth')
require('./modules/audit')
require('./modules/channel')
require('./modules/fn')
require('./modules/finance')
require('./modules/business')



Mock.setup({
    timeout: 800 // setter delay time
})