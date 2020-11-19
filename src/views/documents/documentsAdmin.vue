<template>
  <div class="antd-panel">
    <div class="page-search-wrap">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
              <a-form-item label="资料分类">
                  <a-select placeholder="请选择" v-model="queryParams.docClass"  default-value="0">
                      <a-select-option value="0">已发布</a-select-option>
                      <a-select-option value="1">待发布</a-select-option>
                  </a-select>
              </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="文章标题">
              <a-input v-model="queryParams.title" placeholder="请输入"/>
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
      <a-button type="primary">+ 新建</a-button>
      <a-button type="default" @click="handleDeleteCheck">删除</a-button>
    </div>
    <div class="antd-table-wrap">
      <s-table
        ref="table"
        rowKey='id'
        size='default'
        :columns='columns'
        :data="loadData"
        :alert="alert"
        :rowSelection="rowSelection"
      >
        <template slot="coverImg" slot-scope="text,record">
          <img :src="record.coverImg" alt="">
        </template>
        <template slot="action" slot-scope="text,record">
          <a href="javascript:void(0)" class="table-operation-action">编辑</a>
          <a-popconfirm
            title="确定删除此文件么？"
            ok-text="确定"
            cancel-text="取消"
            placement="topLeft"
            @confirm="handleDelete(record)"
          >
            <a href="javascript:void(0)" class="table-operation-action">删除</a>
          </a-popconfirm>
        </template>
      </s-table>
    </div>
  </div>
</template>


<script>
import STable from '@/components/Table'
import {getDocumentsList} from '@/api/documents'

const columns=[
  {title:"封面图",dataIndex:"coverImg",scopedSlots:{customRender:"coverImg"}},
  {title:"标题",dataIndex:"title"},
  {title:"简介",dataIndex:"describe"},
  {title:"分类",dataIndex:"docClass"},
  {title:"添加时间",dataIndex:"addDate"},
  {title:"阅读量",dataIndex:"reading"},
  {title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},width:"158px"}
]

export default {
  data(){
    return{
      columns,
      queryParams:{},
      alert:{
        show:true,
        clear:()=>{this.selectedRowKeys = []}
      },
      loadData:parameter=>{
        return getDocumentsList(Object.assign(parameter,this.queryParams)).then(res=>{
          console.log(res)
          return res.result
        })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  computed:{
    rowSelection(){
      return {
        selectedRowKeys:this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  components:{
    STable
  },
  methods:{
    onSelectChange(selectedRowKeys, selectedRows){
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handlePush(){
      console.log(this.selectedRowKeys)
      console.log(this.selectedRows)
    },
    handleDelete(record){
      this.$message.info(JSON.stringify(record))
    },
    handleDeleteCheck(){
      console.log(this.selectedRowKeys)
      console.log(this.selectedRows)
    }
  }
}
</script>