<template>
  <a-layout class="admin-wrap">
    <slide-menu :collapsed="collapsed" :menu="slideMenuNav"></slide-menu>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleCollapsed"
        />
        <div class="antd-header-right">
          <span class="antd-notification-header">
              <router-link to="">
                <a-badge :count="notificationCount" dot>
                     <a-icon type="bell" />
                  </a-badge>
              </router-link>
          </span>

          <a-dropdown>
            <span class="ant-dropdown-link" @click="e => e.preventDefault()">
              {{userName}}
            </span>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;" @click="handleLogout"><a-icon type="poweroff" /> 退出</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <div class="breadcrumb-header">
        <a-breadcrumb>
          <a-breadcrumb-item><router-link to="/dashboard">首页</router-link></a-breadcrumb-item>
          <a-breadcrumb-item>{{$route.meta.title}}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <a-layout-content>
        <div class="antd-admin-page">
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import SlideMenu from "./slideMenu.vue"
  import {mapGetters,mapActions} from 'vuex'
export default {
    data() {
        return {
            collapsed: false,
            slideMenuNav:[],
            notificationCount:0
        };
    },
    components:{
        SlideMenu
    },
    computed:{
        ...mapGetters(['addRouter','userName'])
    },
    methods:{
        ...mapActions(['Logout']),
        handleLogout(){
            this.Logout().then(()=>{
                this.$router.push({path:'/login'})
            })
        },
        toggleCollapsed(){
            this.collapsed = !this.collapsed
        }
    },
    created(){
        this.slideMenuNav = this.addRouter[0].children
    }

};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "slide_menu.less";
</style>