<template>
  <div>2</div>
</template>

<script>
import defaultSettings from '@/config/defaultSettings'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      title:"",
      menus:[],
      collapsed:false,
      query:{},
      isMobile:false,
      settings: {
        // 布局类型
        layout: defaultSettings.layout, // 'sidemenu', 'topmenu'
        // 定宽: true / 流式: false
        contentWidth: defaultSettings.layout === 'sidemenu' ? false : defaultSettings.contentWidth === 'Fixed',
        // 主题 'dark' | 'light'
        theme: defaultSettings.navTheme,
        // 主色调
        primaryColor: defaultSettings.primaryColor,
        fixedHeader: defaultSettings.fixedHeader,
        fixSiderbar: defaultSettings.fixSiderbar,
        colorWeak: defaultSettings.colorWeak,

        hideHintAlert: false,
        hideCopyButton: false
      }
    }
  },
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    },
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
        this.settings.contentWidth = false
        // this.settings.fixSiderbar = false
      }
    },
    handleCollapse (val) {
      this.collapsed = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
@import './style.less';
.alert(){
  color: #42b983;
}
.alt{
  color: @initColor;
  .alert()
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
