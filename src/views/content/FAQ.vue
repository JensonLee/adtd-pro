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
              <a-form-item label="分类">
                  <a-select placeholder="请选择" v-model="queryParams.state"  default-value="0">
                      <a-select-option value="0">已发布</a-select-option>
                      <a-select-option value="1">待发布</a-select-option>
                  </a-select>
              </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="tool-tip">
      <a-button type="primary" @click="handleCreate">新建</a-button>
      <router-link to="" class="ant-btn ant-btn-primary">分类管理</router-link>
    </div>
    <div class="antd-table-wrap">
      <s-table
        ref="table"
        rowKey='id'
        size='default'
        :columns='columns'
        :data="loadData"
      >
        <template slot="action" slot-scope="text,record">
          <a href="javascript:void(0)" class="table-operation-action">编辑</a>
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
import {getFAQList} from '@/api/content'

const columns=[
  {title:"常见问题",dataIndex:"ask"},
  {title:"问题回复",dataIndex:"reply"},
  {title:"分类",dataIndex:"askClass"},
  {title:"添加时间",dataIndex:"addDate"},
  {title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},width:"120px"}
]

export default {
  data(){
    return{
      columns,
      queryParams:{},
      loadData:parameter=>{
        return getFAQList(Object.assign(parameter,this.queryParams)).then(res=>{
          console.log(res)
          return res.result
        })
      }
    }
  },
  components:{
    STable
  },
  methods:{
    handleDelete(record){
      this.$message.info(JSON.stringify(record))
    },
    handleCreate(){

    }
  }
}
</script>