<template>
    <div class="antd-panel">
        <div class="page-search-wrap">
            <a-form layout="inline">
                <a-row :gutter="48">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="企业名称">
                            <a-input v-model="queryParams.business_name" placeholder="请输入"/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="行业">
                            <a-select placeholder="请选择" v-model="queryParams.industry"  default-value="0">
                                <a-select-option value="0">1</a-select-option>
                                <a-select-option value="1">2</a-select-option>
                                <a-select-option value="2">3</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="企业状态">
                            <a-select placeholder="请选择" v-model="queryParams.state" default-value="0">
                                <a-select-option value="0">开启</a-select-option>
                                <a-select-option value="1">关闭</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="所属渠道">
                            <a-select placeholder="请选择" v-model="queryParams.channel" default-value="0">
                                <a-select-option value="0">1</a-select-option>
                                <a-select-option value="1">2</a-select-option>
                                <a-select-option value="2">3</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="账户有效期">
                            <a-range-picker v-model="queryParams.expiry_date">
                                <a-icon slot="suffixIcon" type="calendar" />
                            </a-range-picker>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-button type="primary" @click="loadData">查询</a-button>
                        <a-button style="margin-left: 8px" >重置</a-button>
                    </a-col>
                </a-row>
            </a-form>
        </div>
        <div class="tool-tip">
            <a-button type="primary" v-action:add>新建</a-button>
        </div>
        <div class="antd-table-wrap">
            <s-table
              ref="table"
              size="default"
              rowKey='key'
              :columns="columns"
              :data="loadData"
            >
              <template slot="operation" slot-scope="text,record">
                <a href="javascript:;" class="table-operation-action" @click="handleDetail(record)">详情</a>
                <a href="javascript:;" class="table-operation-action">编辑</a>
                <a href="javascript:;" class="table-operation-action">删除</a>
                <a href="javascript:;" class="table-operation-action">充值</a>
                <a href="javascript:;" class="table-operation-action">续约</a>
                <a href="javascript:;" class="table-operation-action">分配课程</a>
                <a href="javascript:;" class="table-operation-action">已分配课程</a>
              </template>
            </s-table>
        </div>
    </div>
</template>
<script>
    import STable from '@/components/Table'
    import {businessAdminTable} from '@/api/business'
    const columns=[
        {
            title: '企业名称',
            dataIndex: 'business_name'
        },
        {
            title: '所属渠道',
            dataIndex: 'channel',
        },
        {
            title: '行业',
            dataIndex: 'industry',
        },
        {
            title: '状态',
            dataIndex: 'state'
        },
        {
            title: '余额',
            dataIndex: 'surplus'
        },
        {
            title:'有效期',
            dataIndex: "expiry_date"
        },
        {
            title: "创建日期",
            dataIndex: "create_date"
        },
        {
            title:'操作',
            dataIndex:'operation',
            scopedSlots: { customRender: 'operation' },
            width:'382px'
        }
    ]
    export default {
        data(){
            return {
                queryParams:{},
                columns,
                loadData:paramter => {
                  return businessAdminTable(Object.assign(paramter,this.queryParams)).then(res=>{
                    return res.result
                  })
                }
            }
        },
        components:{
          STable
        },
        created(){
            
        },
        methods:{
            handleDetail(r){
              alert(JSON.stringify(r))
            }
        },

    }
</script>
