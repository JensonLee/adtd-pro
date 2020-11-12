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
            <a-form-item label="商品名称">
              <a-input v-model="queryParams.commodity" placeholder="请输入"/>
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
              rowKey="commodityId"
              :columns='columns'
              :data="loadData"
      >
        <template slot="commodityImg" slot-scope="text,record">
          <img :src="record.commodityImg" alt="">
        </template>
        <template slot="status" slot-scope="text,record">
          <a-tag color="green" v-if="record.status=='1'">换购中</a-tag>
          <a-tag color="red" v-if="record.status=='0'">已结束</a-tag>
        </template>
        <template slot="action">
          <router-link to="" class="table-operation-action">兑换记录</router-link>
        </template>
      </s-table>
    </div>
  </div>
</template>

<script>
    import STable from '@/components/Table'
    import {shoppingMallList} from '@/api/fn'
  const columns = [
      {
          title:"企业名称",
          dataIndex:'businessName'
      },{
          title:"商品ID",
          dataIndex:"commodityId"
      },{
          title:"商品名称",
          dataIndex:"commodityName"
      },{
          title:"商品图片",
          dataIndex:'commodityImg',
          scopedSlots:{customRender:'commodityImg'}
      },{
          title:"积分",
          dataIndex:'scoring'
      },{
          title:'添加时间',
          dataIndex:'addDate'
      },{
          title:'状态',
          dataIndex:'status',
          scopedSlots:{customRender:'status'}
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
                  return shoppingMallList(Object.assign(paramter,this.queryParams)).then(res=>{
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