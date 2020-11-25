module.exports = {
  devServer:{
    proxy:{
      '/proxy':{
        target:"http://192.168.12.11:3300",         //设置代理地址
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          "^/proxy":""
        }
      }
    }
  },
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
