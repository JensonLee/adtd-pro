

const Mock = require('mockjs')

require('./modules/user/login')
require('./modules/auth')
require('./modules/audit')
require('./modules/channel')
require('./modules/fn')
require('./modules/finance')
require('./modules/course')
require('./modules/content')
require('./modules/documents')
require('./modules/statistics')
require('./modules/business')



Mock.setup({
    timeout: 800 // setter delay time
})