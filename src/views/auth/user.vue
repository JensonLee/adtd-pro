<template>
  <div class="antd-panel">
    <div class="page-search-wrap">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="用户名">
              <a-input v-model="queryParams.userName" placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="手机号">
              <a-input v-model="queryParams.phoneNo" placeholder="请输入"/>
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
      <a-button type="primary" @click="handleAdd" v-action:add>新建</a-button>
    </div>
    <div>
      <s-table
        ref="table"
        size="default"
        rowKey="id"
        :data="loadData"
        :columns="columns"
      >
        <template slot="action" slot-scope="text,record">
          <a href="javascript:void(0)" class="table-operation-action" @click="handleEdit(record)">编辑</a>
          <a-popconfirm
            title="确定删除此文章么？"
            ok-text="确定"
            cancel-text="取消"
            placement="topLeft"
            @confirm="handleDelete(record)"
          >
            <a href="javascript:void(0)" class="table-operation-action">删除</a>
          </a-popconfirm>
          <a href="javascript:void(0)" class="table-operation-action" @click="handleEdit">设置角色</a>
        </template>
      </s-table>
    </div>
    <s-form 
      ref="form" 
      :visible="visible" 
      :confirmLoading="confirmLoading"
      :dataModel="dataModel"
      @ok="handleOk"
      @cancel="handleCancel"
    ></s-form>
  </div>
</template>

<script>
import {STable} from '@/components'
import { getUserList } from '@/api/auth'
import SForm from './modules/form'

const columns = [
  {
    title:"用户名",
    dataIndex:"userName"
  },
  {
    title:"邮箱",
    dataIndex:'email'
  },
  {
    title:"手机号",
    dataIndex:'phoneNo'
  },
  {
    title:"角色",
    dataIndex:'roleId'
  },
  {
    title:'创建时间',
    dataIndex:'createDate'
  },
  {
    title:'更新时间',
    dataIndex:'uploadDate'
  },
  {title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},width:"180px"}
]
export default {
  data(){
    return {
      columns,
      queryParams:{},
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return getUserList(Object.assign(parameter, this.queryParam))
          .then(res => {
            console.log(res)
            return res.result
          })
      },
      visible:false,
      confirmLoading:false,
      dataModel:null
    }
  },
  components:{
    STable,
    SForm
  },
  methods:{
    handleAdd(){
      this.visible=true
      this.dataModel=null
    },
    handleOk(){
      const form = this.$refs.form.form
      this.confirmLoading = true
      form.validateFields((errors, values)=>{
        if(!errors){
          console.log('values', values)
          if(values.id && values.id>0){
            /**
             * 这里ID判断是否存在，存在说明是修改，在这里编写修改的接口，在if里面操作，这里模拟了一个异步
             */
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res=>{
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()
            })
          }else{
            /**
             * 这里没有ID说明是新建用户，新建用户的接口操作在这完成
             */
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res=>{
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()
            })
          }
        }else{
          this.confirmLoading = false
        }
      })
    },
    handleCancel(){
      this.visible = false
      const form = this.$refs.form.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleDelete(record){
      /**
       * 这里是删除接口操作,record是这行数据
       */
      this.$message.info(JSON.stringify(record))
    },
    handleEdit(record){
      this.visible=true
      this.dataModel = {...record}
    }
  }
}
</script>