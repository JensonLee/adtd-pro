<template>
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" class="aaaa">
            <template v-for="item in menu">
                <a-menu-item :key="item.name" v-if="!item.children">
                    <router-link :to="item.path">
                        <a-icon type="user" />
                        <span>{{item.meta.title}}</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu :key="item.name" v-if="item.children && item.children.length>0">
                    <span slot="title"><a-icon type="mail" /><span>{{item.meta.title}}</span></span>
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
        created(){
            console.log(this.menu);
//            generator(this.menu[0]);
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