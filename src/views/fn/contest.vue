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
            <a-form-item label="竞赛名称">
              <a-input v-model="queryParams.contestName" placeholder="请输入"/>
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
              rowKey="contestId"
              :columns='columns'
              :data="loadData"
      >
        <template slot="contestImg" slot-scope="text,record">
          <img :src="record.contestImg" alt="">
        </template>
        <template slot="action">
          <router-link to="" class="table-operation-action">竞赛记录</router-link>
        </template>
      </s-table>
    </div>
  </div>
</template>

<script>
    import STable from '@/components/Table'
    import {contestList} from '@/api/fn'
    const columns = [
        {
            title:"竞赛编号",
            dataIndex:"contestId"
        }, {
            title:"企业名称",
            dataIndex:'businessName'
        },{
            title:"竞赛名称",
            dataIndex:"contestName"
        },{
            title:"创建时间",
            dataIndex:"createDate"
        },{
            title:"商品图片",
            dataIndex:'contestImg',
            scopedSlots:{customRender:'contestImg'}
        },{
            title:"积分",
            dataIndex:'scoring'
        },{
            title:'开始时间',
            dataIndex:'startDate'
        },{
            title:'到期时间',
            dataIndex:'endDate'
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
                    return contestList(Object.assign(paramter,this.queryParams)).then(res=>{
                        console.log(res);
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