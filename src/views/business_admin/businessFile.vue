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
          rowKey="key"
          :columns='columns'
          :data="loadData"
        >
          <template slot="action">
            <router-link to="">文件详情</router-link>
          </template>
        </s-table>
      </div>
    </div>
</template>
<script>
    import STable from '@/components/Table'
    import {businessAdminTable} from '@/api/business'

    const columns = [
      {
        title:'企业名称',
        dataIndex:'business_name'
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
            return businessAdminTable(Object.assign(paramter,this.queryParams)).then(res=>{
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