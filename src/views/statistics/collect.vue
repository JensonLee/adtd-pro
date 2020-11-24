<template>
  <div>
    <div class="antd-panel">
      <a-row>
        <a-col :md="8" :sm="24">
          <a-statistic title="企业用户总数" :value="collectViews.businessCount" style="text-align:center" />
        </a-col>
        <a-col :md="8" :sm="24">
          <a-statistic title="激活企业用户总数" :value="collectViews.validBusinessCount" style="text-align:center" />
        </a-col>
        <a-col :md="8" :sm="24">
          <a-statistic title="总注册人数" :value="collectViews.registerCount" style="text-align:center" />
        </a-col>
      </a-row>
    </div>
    <div class="antd-panel">
      <div class="page-search-wrap">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="时间范围">
                <a-range-picker @change="handlePicker">
                    <a-icon slot="suffixIcon" type="calendar" />
                </a-range-picker>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="企业状态">
                <a-select placeholder="请选择" v-model="queryParams.businessStatus"  default-value="0">
                  <a-select-option value="0">已发布</a-select-option>
                  <a-select-option value="1">待发布</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="企业名称">
                <a-input v-model="queryParams.businessName" placeholder="请输入"/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24" style="margin-bottom:24px">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" >重置</a-button>
              <a-button type="primary" style="margin-left: 8px" >导出</a-button>
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
  </div>
</template>

<script>
import STable from '@/components/Table'
import {collectViews,collectBusinessList} from '@/api/statistics'

const columns = [
  {title:"企业名称",dataIndex:"businessName"},
  {title:"注册人数",dataIndex:"resgisterCount"},
  {title:"状态",dataIndex:"status"},
  {title:"到期日",dataIndex:"endDate"},
  {title:"操作",dataIndex:"action",scopedSlots:{customRender:'action'}},

]
export default {
  data () {
    return {
      collectViews:{
        businessCount:0,
        validBusinessCount:0,
        registerCount:0
      },
      queryParams:{},
      columns,
      loadData:paramter => {
        return collectBusinessList(Object.assign(paramter,this.queryParams)).then(res=>{
          return res.result
        })
      }
    }
  },
  components:{
    STable
  },
  methods:{
    getHeaderCollect(){
      collectViews().then(res=>{
        this.collectViews =  res.result
      })
    },
    handlePicker(date,dateStr){
      this.queryParams.expiry_date = dateStr
    }
  },
  created(){
    this.getHeaderCollect()
  }
}
</script>