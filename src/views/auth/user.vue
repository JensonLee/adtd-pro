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
      <!-- <a-button type="primary" v-action:add>新建</a-button> -->
    </div>
    <div>
      <s-table
        ref="table"
        size="default"
        rowKey="id"
        :data="loadData"
        :columns="columns"
      ></s-table>
    </div>
  </div>
</template>

<script>
import {STable} from '@/components'
import { getUserList } from '@/api/auth'

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
  }
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
      }
    }
  },
  components:{
    STable
  }
}
</script>