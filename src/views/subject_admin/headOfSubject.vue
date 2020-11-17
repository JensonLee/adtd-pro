<template>
  <div class="antd-panel">
    <div class="page-search-wrap">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="企业名称">
              <a-input v-model="queryParams.businessName" placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
            <a-button style="margin-left: 8px" >重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="tool-tip">
      <a-button type="primary">新建</a-button>
      <a-button type="primary">导出</a-button>
    </div>

    <div class="antd-table-wrap">
      <s-table
              ref="table"
              size="default"
              rowKey="id"
              :columns='columns'
              :data="loadData"
      >
        <template slot="action">
          <a href="javascript:void" class="table-operation-action">详情</a>
          <a href="javascript:void" class="table-operation-action">编辑</a>
          <a href="javascript:void" class="table-operation-action">删除</a>
          <router-link to="" class="table-operation-action">负责课程</router-link>
        </template>
      </s-table>
    </div>
  </div>
</template>

<script>
import STable from '@/components/Table'
import {courseResponsible} from '@/api/course'
const columns = [
  {
    title:"账号",
    dataIndex:'username'
  },{
    title:"姓名",
    dataIndex:'cname'
  },{
    title:'性别',
    dataIndex:'gender'
  },{
    title:'手机号',
    dataIndex:'phoneNo'
  },{
    title:'操作',
    dataIndex:'action',
    scopedSlots:{customRender:'action'}
  }
]
export default {
  data(){
    return{
      columns,
      queryParams:{},
      loadData:parameter =>{
        return courseResponsible(Object(parameter,this.queryParams)).then(res=>{
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