<template>
  <div class="antd-panel">
    <div class="page-search-wrap">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="渠道名称">
              <a-input v-model="queryParams.channelName" placeholder="请输入"/>
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
    </div>
    <div class="antd-table-wrap">
      <s-table 
        ref="table"
        size="default"
        rowKey="id"
        :columns="columns"
        :data="loadData"
      >
        <template slot="action" slot-scope="text,record">
          <a href="javascript:void(0)" class="table-operation-action" @click="handleEdit(record)">编辑</a>
          <a href="javascript:void(0)" class="table-operation-action">删除</a>
          <a href="javascript:void(0)" class="table-operation-action">关联企业</a>
        </template>
      </s-table>
    </div>
  </div>
</template>


<script>
import {STable} from '@/components'
import {getChnnelInfo} from '@/api/channel'

const columns = [
  {
    title:"渠道名称",
    dataIndex:'channelName'
  },{
    title:'创建时间',
    dataIndex:'createDate'
  },{
    title:'更新时间',
    dataIndex:'uploadDate'
  },{
    title:'操作',
    dataIndex:'action',
    scopedSlots:{customRender:'action'},
    width:'180px'
  }
]
export default {
  data(){
    return {
      columns,
      queryParams:{},
      loadData:paramter=>{
        return getChnnelInfo(Object.assign(paramter,this.queryParams)).then(res=>{
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
    handleEdit(r){
      alert(JSON.stringify(r))
    }
  }
}
</script>