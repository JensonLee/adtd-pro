<template>
  <div class="antd-panel">
    <div class="page-search-wrap">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="联系人">
              <a-input v-model="queryParams.contact" placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="联系电话">
              <a-input v-model="queryParams.phoneNo" placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="状态">
              <a-select placeholder="请选择" v-model="queryParams.state" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">有效</a-select-option>
                <a-select-option value="2">过期</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="用户名">
              <a-input v-model="queryParams.username" placeholder="请输入"/>
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
        <span slot="action" slot-scope="text,record">
          <a href="javascript:void(0)" @click="handleEdit(record)" class="table-operation-action">编辑</a>
          <a href="javascript:void(0)" class="table-operation-action">删除</a>
        </span>
      </s-table>
    </div>
  </div>
</template>

<script>
import {STable} from '@/components'
import { getChannelList } from '@/api/channel'
const columns = [
  {
    title:"所属渠道",
    dataIndex:'channel'
  },{
    title:"用户名",
    dataIndex:"username"
  },{
    title:"联系人",
    dataIndex:"contact"
  },{
    title:"联系电话",
    dataIndex:"phoneNo"
  },{
    title:"创建时间",
    dataIndex:'createDate'
  },{
    title:"更新时间",
    dataIndex:"uploadDate"
  },{
    title:"操作",
    dataIndex:"action",
    scopedSlots:{customRender:'action'}
  }
]
export default {
  data(){
    return {
      columns,
      queryParams:{},
      loadData:parameter=>{
        return getChannelList(Object.assign(parameter,this.queryParams)).then(res=>{
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