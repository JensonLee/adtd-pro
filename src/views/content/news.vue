<template>
  <div class="antd-panel">
    <div class="page-search-wrap">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="文章标题">
              <a-input v-model="queryParams.newsTitle" placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
              <a-form-item label="状态">
                  <a-select placeholder="请选择" v-model="queryParams.state"  default-value="0">
                      <a-select-option value="0">已发布</a-select-option>
                      <a-select-option value="1">待发布</a-select-option>
                  </a-select>
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
      <router-link to="" class="ant-btn ant-btn-primary">+ 新建</router-link>
      <a-button type="primary" @click="handlePush">发布</a-button>
    </div>
    <div class="antd-table-wrap">
      <s-table
        ref="table"
        rowKey='newsId'
        size='default'
        :columns='columns'
        :data="loadData"
        :alert="alert"
        :rowSelection="rowSelection"
      >
        <template slot="coverImg" slot-scope="text,record">
          <img :src="record.coverImg" alt="">
        </template>
        <template slot="pushStaus" slot-scope="text,record">
          <a-tag color="cyan" v-if="record.state === 0">待发布</a-tag>
          <a-tag color="green" v-if="record.state === 1">已发布</a-tag>
        </template>
        <template slot="action" slot-scope="text,record">
          <router-link to="" class="table-operation-action">编辑</router-link>
          <a href="javascript:void(0)" class="table-operation-action" v-if="record.state===0">发布</a>
          <a href="javascript:void(0)" class="table-operation-action" v-if="record.state===1">撤回</a>
          <a-popconfirm
            title="确定删除此文章么？"
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
import {getNewsList} from '@/api/content'

const columns=[
  {title:"资讯ID",dataIndex:"newsId"},
  {title:"封面图",dataIndex:"coverImg",scopedSlots:{customRender:"coverImg"}},
  {title:"文章标题",dataIndex:"newsTitle"},
  {title:"阅读量",dataIndex:"reading"},
  {title:"排序",dataIndex:"sort"},
  {title:"状态",dataIndex:"pushStaus",scopedSlots:{customRender:"pushStaus"}},
  {title:"添加时间",dataIndex:"createDate"},
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
        return getNewsList(Object.assign(parameter,this.queryParams)).then(res=>{
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
    }
  }
}
</script>