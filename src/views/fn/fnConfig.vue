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
          <template slot="fn_staus" slot-scope="text,record">
            <span class="fn-staus" >企业竞赛 {{record.fnStaus.dataFn}}</span>
            <!-- <span class="fn-staus" :class="{"fn-staus-on" : record.fnStaus.dataFn}">资料库</span> -->
            <!-- <span class="fn-staus" :class="{"fn-staus-on":record.fnStaus.fileFn =='1'}">企业空间</span>
            <span class="fn-staus" :class="{"fn-staus-on":record.fnStaus.everyDayTestFn =='1'}">每日一测</span>
            <span class="fn-staus" :class="{"fn-staus-on":record.fnStaus.shoppingMallFn =='1'}">企业商城</span> -->
          </template>
          <template slot="action">
            <a href="javascript:void(0)">企业功能</a>
            <a href="javascript:void(0)">功能详情</a>
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
        dataIndex:'fn_staus',
        scopedSlots:{customRender:"fn_staus"}
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

<style scoped>

</style>