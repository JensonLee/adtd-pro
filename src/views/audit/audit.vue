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
            <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
            <a-button style="margin-left: 8px" >重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="antd-table-wrap">
      <s-table
      ref="table"
      size="default"
      rowKey="id"
      :columns="columns"
      :data="loadData"
    >
      <span slot="status" slot-scope="text, record">
        <a-tag color="cyan" v-if="record.state == '0'">{{record.stateText}}</a-tag>
        <a-tag color="green" v-if="record.state == '1'">{{record.stateText}}</a-tag>
        <a-tag color="red" v-if="record.state == '2'">{{record.stateText}}</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <template v-if="record.state == '0'">
            <a href="javascript:void(0)" class="table-operation-action">通过</a>
            <a href="javascript:void(0)" class="table-operation-action">拒绝</a>
        </template>
        <template v-else>
            <a href="javascript:void(0)" class="table-operation-action" style="color:#666">撤回</a>
        </template>
      </span>
    </s-table>
    </div>
  </div>
</template>
<script>
import {STable} from '@/components'
import { getAuditList } from "@/api/audit";
const columns = [
  {
    title:'企业名称',
    dataIndex:'businessName'
  },
  {
    title:'联系人',
    dataIndex:"contact"
  },
  {
    title:'推荐人',
    dataIndex:"recommender"
  },
  {
    title:'联系电话',
    dataIndex:"phoneNo"
  },
  {
    title:'邮箱',
    dataIndex:"email"
  },
  {
    title:'提交时间',
    dataIndex:"upDate"
  },
  {
    title:'审批备注',
    dataIndex:"marks"
  },
  {
    title:'状态',
    dataIndex:"status",
    scopedSlots:{customRender: 'status'}
  },
  {
    title:"操作",
    dataIndex:'action',
    scopedSlots:{customRender: 'action'}
  }
]
export default {
  data(){
    return {
      columns,
      queryParams:{},
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return getAuditList(Object.assign(parameter, this.queryParams))
          .then(res => {
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

<style lang="less" scoped>
  .antd-table-wrap {
    .state-0{
      color: #2db7f5;
    }
    .state-1{
      color: #87d068;
    }
    .state-2{
      color: #f50;
    }
  }
</style>