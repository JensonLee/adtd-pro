<template>
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu 
          theme="dark" 
          mode="inline" 
          :default-selected-keys="[defaultSelectMenu]" 
          :default-open-keys="[defaultOpenKey]" class="aaaa"
          >
            <template v-for="item in menu">
                <a-menu-item :key="item.name" v-if="!item.children">
                    <router-link :to="item.path">
                        <a-icon :type="item.meta.icon" />
                        <span>{{item.meta.title}}</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu :key="item.name" v-if="item.children && item.children.length>0">
                    <span slot="title"><a-icon :type="item.meta.icon" /><span>{{item.meta.title}}</span></span>
                    <a-menu-item :key="subItem.name" v-for="subItem in item.children">
                        <router-link :to="subItem.path">{{subItem.meta.title}}</router-link>
                    </a-menu-item>
                </a-sub-menu>
            </template>
            <!--<a-menu-item key="1">
                <a-icon type="user" />
                <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="upload" />
                <span>nav 3</span>
            </a-menu-item>-->
        </a-menu>
    </a-layout-sider>
</template>
<script>
//    import {fillterRouter} from '@/router/generator-routers'
import {mapGetters} from 'vuex'
    export default {
        name:"slide_menu",
        props:{
            collapsed:{
                type:Boolean,
                default:false
            },
            menu:{
                type:Array,
                default:()=>[]
            }
        },
        data(){
          return {
            defaultSelectMenu:"dashboard",
            defaultOpenKey:''
          }
        },
        computed:{
          ...mapGetters(['roles'])
        },
        methods:{
          initMenuParames(){
            this.defaultSelectMenu = this.$route.name;
            this.defaultOpenKey = this.$route.meta.perentPath ? this.$route.meta.perentPath : ""
          }
        },
        created(){
          this.initMenuParames()
        }
    }
</script>

<style type="less" scoped>
    .logo{
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>