module.exports = {
  // devServer:{
  //   proxy:{
  //     '/proxy':{
  //       target:"http://192.168.12.11:3300",         //设置代理地址
  //       changeOrigin:true,
  //       ws:true,
  //       pathRewrite:{
  //         "^/proxy":""
  //       }
  //     }
  //   }
  // },
  css:{
      loaderOptions:{
          less:{
              modifyVars: {
                  //在此处设置，也可以设置直角、边框色、字体大小等
                  'primary-color': '#84c562',
              },
              javascriptEnabled:true
          }

      }

  }
}



/**
 * IE 报错 SecurityError 主要原因时IDE问题 浏览器设置下即可 ： 
 * 解决方案一：
 * Internet选项->安全->本地Internet->站点，把所有勾选取消
 * 
 * 解决方案二：
 * Internet选项->安全->本地Internet->站点->高级->添加 ws://localhost:81/
 */