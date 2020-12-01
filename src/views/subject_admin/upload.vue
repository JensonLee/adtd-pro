<template>
  <div class="antd-page-content">
    <div class="antd-page">
    <div class="antd-panel">
      <div class="page-search-wrap">
          <a-form layout="inline">
              <a-row :gutter="48">
                  <a-col :md="8" :sm="24">
                      <a-form-item label="课程编号">
                          <a-input v-model="queryParams.id" placeholder="请输入"/>
                      </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                      <a-form-item label="课程名称">
                          <a-input v-model="queryParams.courseName" placeholder="请输入"/>
                      </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                      <a-form-item label="课程分类">
                          <a-select placeholder="请选择" v-model="queryParams.courseClass"  default-value="0">
                              <a-select-option value="0">1</a-select-option>
                              <a-select-option value="1">2</a-select-option>
                              <a-select-option value="2">3</a-select-option>
                          </a-select>
                      </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                      <a-form-item label="行业类别">
                          <a-select placeholder="请选择" v-model="queryParams.tradesClass" default-value="0">
                              <a-select-option value="0">开启</a-select-option>
                              <a-select-option value="1">关闭</a-select-option>
                          </a-select>
                      </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                      <a-form-item label="领 域">
                          <a-select placeholder="请选择" v-model="queryParams.field" default-value="0">
                              <a-select-option value="0">1</a-select-option>
                              <a-select-option value="1">2</a-select-option>
                              <a-select-option value="2">3</a-select-option>
                          </a-select>
                      </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                      <a-button type="primary" @click="loadData">查询</a-button>
                      <a-button style="margin-left: 8px" >重置</a-button>
                  </a-col>
              </a-row>
          </a-form>
      </div>
      <div class="tool-tip">
        <router-link class="ant-btn ant-btn-primary" :to="{path:'/subject_admin/upload/list/create'}">新建</router-link>
      </div>
      <div class="antd-table-wrap">
        <s-table
          ref="table"
          size="default"
          rowKey="id"
          :columns='columns'
          :data="loadData"
          :scroll="{ x: 1500 }"
          >
          <template slot="img" slot-scope="text,record">
            <img :src="record.img" alt="">
          </template>
          <template slot="action" slot-scope="text,record">
            <router-link :to="{path:'/subject_admin/upload/list/preview',query:{courseId:record.id}}" class="table-operation-action">预览</router-link>
            <router-link to="" class="table-operation-action">上传</router-link>
            <router-link to="" class="table-operation-action">编辑</router-link>
            <router-link to="" class="table-operation-action">删除</router-link>
            <router-link to="" class="table-operation-action">考题管理</router-link>
          </template>
          </s-table>
      </div>
    </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import STable from '@/components/Table'
import {uploadCourseList} from '@/api/course'

const columns=[
  {
    title:'课程ID',
    dataIndex:'id'
  },{
    title:'课程编号',
    dataIndex:'courseId'
  },{
    title:'课程编号',
    dataIndex:'couseName'
  },{
    title:'封面图',
    dataIndex:'img',
    scopedSlots:{customRender:"img"}
  },{
    title:'所属领域',
    dataIndex:'field'
  },{
    title:'行业类别',
    dataIndex:'tradesClass'
  },{
    title:'课程类型',
    dataIndex:'courseType'
  },{
    title:'课程分类',
    dataIndex:'courseClass'
  },{
    title:'负责人',
    dataIndex:'responsible'
  },{
    title:'创建时间',
    dataIndex:'createDate'
  },{
    title:'操作',
    dataIndex:'action',
    scopedSlots:{customRender:"action"},
    width:"260px",
    fixed: 'right'
  }
]
export default {
  data(){
    return{
      columns,
      queryParams:{},
      loadData:parameter =>{
        const pageaction = this.$route.params.pageaction || parameter
        console.log(this.$route.params)
        return uploadCourseList(Object(pageaction,this.queryParams)).then(res=>{
          return res.result
        })
      }
    }
  },
  components:{
    STable
  }
}
</script>