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
          :columns='columns'
          :data="loadData"
        >
          <template slot="fn_status" slot-scope="text,record">
            <span class="fn-status" :class="{'fn-status-on':record.fnStaus.contestFn=='1'}">企业竞赛</span>
             <span class="fn-status" :class="{'fn-status-on' : record.fnStaus.dataFn}">资料库</span>
             <span class="fn-status" :class="{'fn-status-on':record.fnStaus.fileFn =='1'}">企业空间</span>
            <span class="fn-status" :class="{'fn-status-on':record.fnStaus.everyDayTestFn =='1'}">每日一测</span>
            <span class="fn-status" :class="{'fn-status-on':record.fnStaus.shoppingMallFn =='1'}">企业商城</span>
          </template>
          <template slot="action">
            <a href="javascript:void(0)" class="table-operation-action">企业功能</a>
            <a href="javascript:void(0)" class="table-operation-action">功能详情</a>
          </template>
        </s-table>
      </div>
    </div>
</template>
<script>
    import STable from '@/components/Table'
    import {fnConfig} from '@/api/fn'

    const columns = [
      {
        title:'企业名称',
        dataIndex:'businessName'
      },{
        title:'功能开通状态',
        dataIndex:'fn_status',
        scopedSlots:{customRender:"fn_status"}
      },{
        title:'操作',
        dataIndex:'action',
        scopedSlots:{customRender:'action'}
      }
    ]
    export default {
      data(){
        return {
          columns,
          queryParams:{},
          loadData: paramter => {
            return fnConfig(Object.assign(paramter,this.queryParams)).then(res=>{
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

<style lang="less" scoped>
  .fn-status{
    border:1px solid #d9d9d9;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 12px;
    padding: 0 7px;
    line-height: 20px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: #fafafa;
    margin-right:8px;
    display: inline-block;
    cursor: pointer;
  }
  .fn-status.fn-status-on{
    background-color: #87d068;
    color: #ffffff;
    border-color: #87d068;
  }
</style>