<template>
  <a-layout id="components-layout-demo-custom-trigger" class="admin-wrap">
    <slide-menu :collapsed="collapsed" :menu="slideMenuNav"></slide-menu>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <div class="breadcrumb-header">
        <a-breadcrumb>
          <a-breadcrumb-item><router-link to="/dashboard">首页</router-link></a-breadcrumb-item>
          <a-breadcrumb-item>{{$route.meta.title}}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <a-layout-content
        :style="{ margin: '12px 12px', padding: '24px', background: '#fff',  }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import SlideMenu from "./slideMenu.vue"
  import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            collapsed: false,
            slideMenuNav:[]
        };
    },
    components:{
        SlideMenu
    },
    computed:{
        ...mapGetters(['addRouter'])
    },
    created(){
        this.slideMenuNav = this.addRouter[0].children
        console.log(this.$route);
    }

};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "slide_menu.less";
</style>