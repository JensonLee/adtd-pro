<template>
    <a-layout-sider v-model="collapsed" :trigger="null" >
        <div class="antd-admin-logo">
          <div class="logo">
              <img src="~@/assets/logo.png" alt="">
              <span class="logo-title">瑞迈教育</span>
          </div>
        </div>
        <div class="antd-slide">
            <a-menu
              mode="inline"
              :default-selected-keys="[defaultSelectMenu]"
              :default-open-keys="defaultOpenKey"
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
            </a-menu>
        </div>
    </a-layout-sider>
</template>
<script>
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
            defaultOpenKey:[]
          }
        },
        computed:{
          ...mapGetters(['roles']),
            subMenu(){
              const subMenuList = []
              this.menu.filter(t=>{
                  if(t.children && t.children.length){
                      subMenuList.push(t.name)
                      return true
                  }
                  return false
              })
                return subMenuList
            }
        },
        methods:{
          initMenuParames(){
            this.defaultSelectMenu = this.$route.name;
            this.defaultOpenKey.push(this.$route.meta.parentPath ? this.$route.meta.parentPath : "")
          },
            handleOpenChange(openKeys){
                const latestOpenKey = openKeys.find(key => this.defaultOpenKey.indexOf(key) === -1);
                if(this.subMenu.indexOf(latestOpenKey)===-1){
                    this.defaultOpenKey = openKeys
                }else{
                    this.defaultOpenKey = latestOpenKey ? [latestOpenKey] : [];
                }
            }
        },
        created(){
          this.initMenuParames()
        }
    }
</script>
