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
            <a-button style="margin-left: 8px" @click="handleReset">重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="tool-tip">
      <a-button type="primary" @click="handleAdd">新建</a-button>
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
        <template slot="action" slot-scope="text,record">
          <a href="javascript:void(0)" class="table-operation-action" @click="handleDetail(record)">详情</a>
          <a href="javascript:void(0)" class="table-operation-action">编辑</a>
          <a-popconfirm
            title="确定删除此负责人么？"
            ok-text="确定"
            cancel-text="取消"
            placement="left"
            @confirm="handleDelete"
          >
            <a href="javascript:void(0)" class="table-operation-action">删除</a>
          </a-popconfirm>
          <router-link :to="{path:'/subject_admin/head_of_subject/responsible/course',query:{responsibleId:record.id}}" class="table-operation-action">负责课程</router-link>
        </template>
      </s-table>
      <create-responsible
        :visible="visible"
        :confirmLoading="confirmLoading"
        :model="model"
        @ok="handleOk"
        @cancel="handleCancel"
      ></create-responsible>
    </div>
  </div>
</template>

<script>
import STable from '@/components/Table'
import {courseResponsible} from '@/api/course'
import CreateResponsible from './modules/createResponsible'
const columns = [
  {
    title:"账号",
    dataIndex:'username'
  },{
    title:"姓名",
    dataIndex:'cname',
    sorter: true
  },{
    title:'性别',
    dataIndex:'gender',
    sorter: true
  },{
    title:'手机号',
    dataIndex:'phoneNo'
  },{
    title:'操作',
    dataIndex:'action',
    scopedSlots:{customRender:'action'},
    width:'220px'
  }
]
export default {
  data(){
    return{
      columns,
      queryParams:{},
      loadData:parameter =>{
        console.log(parameter)
        return courseResponsible(Object(parameter,this.queryParams)).then(res=>{
          return res.result
        })
      },
      visible:false,
      confirmLoading:false,
      model:null
    }
  },
  components:{
    STable,
    CreateResponsible
  },
  created(){
  },
  methods:{
    handleAdd(){
      this.visible = true
      this.model=null
    },
    handleOk(){
      this.visible=false
    },
    handleCancel(){
      this.visible=false
    },
    handleDetail(record){
      this.visible=true
      this.model = record
    },
    handleDelete(){
      this.$message.success('成功删除此数据')
    },
    handleReset(){
      this.queryParams={}
      this.$refs.table.refresh(true)
    }
  }
}
</script>