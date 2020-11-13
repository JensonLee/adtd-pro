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
            <a-form-item label="流水号">
              <a-input v-model="queryParams.regardingId" placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="时间范围">
              <a-range-picker @change="handlePicker">
                  <a-icon slot="suffixIcon" type="calendar" />
              </a-range-picker>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" style="margin-bottom:24px">
            <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
            <a-button style="margin-left: 8px" >重置</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="antd-table-wrap">
      <s-table
        size="default"
        ref="table"
        rowKey="regardingId"
        :columns="columns"
        :data="loadData"
      >

      </s-table>
    </div>
  </div>
</template>

<script>
import STable from '@/components/Table'
import {getBuyRecordList} from '@/api/finance'

const columns = [
  {
    title:'流水号',
    dataIndex:'regardingId'
  },{
    title:'企业名称',
    dataIndex:'businessName'
  },{
    title:'时间',
    dataIndex:'date'
  },{
    title:'课程名称',
    dataIndex:'courseName'
  },{
    title:'课程周期',
    dataIndex:'dateTo'
  },{
    title:'上格币',
    dataIndex:'amount'
  },{
    title:'余额',
    dataIndex:'balance'
  }
]
export default {
  data(){
    return {
      columns,
      queryParams:{},
      loadData:paramter => {
        return getBuyRecordList(Object.assign(paramter,this.queryParams)).then(res=>{
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
    handlePicker(date,dateStr){
      this.queryParams.expiry_date = dateStr
    }
  }
}
</script>