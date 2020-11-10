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
        <div class="">
            <a-table bordered :data-source="tableData" :columns="columns" :pagination="pagination">
                <template slot="operation">
                    <a href="javascript:;" class="table-operation-action">详情</a>
                    <a href="javascript:;" class="table-operation-action">编辑</a>
                    <a href="javascript:;" class="table-operation-action">删除</a>
                    <a href="javascript:;" class="table-operation-action">充值</a>
                    <a href="javascript:;" class="table-operation-action">续约</a>
                    <a href="javascript:;" class="table-operation-action">分配课程</a>
                    <a href="javascript:;" class="table-operation-action">已分配课程</a>
                </template>
            </a-table>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    import STable from '@/components/Table'
    const columns=[
        {
            title: '企业名称',
            dataIndex: 'business_name',
            width: '20%'
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
            scopedSlots: { customRender: 'operation' }
        }
    ]
    export default {
        data(){
            return {
                queryParams:{},
                tableData:[],
                columns,
                pagination: {
                    total: 0,
                    pageSize: 10,//每页中显示10条数据
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "50", "100"],//每页中显示的数据
                    showTotal: total => `共有 ${total} 条数据`,  //分页中显示总的数据
                }
            }
        },
        created(){
            this.loadData()
        },
        methods:{
            ...mapActions(['GetBusinessAdminTable']),
            loadData(){
                let params = this.queryParams
                this.GetBusinessAdminTable(params).then(res=>{
                    this.tableData = res.result.businessAdminTable
                })
            }
        },

    }
</script>

<style lang="less" rel="stylesheet/less">
    .page-search-wrap{
        .ant-form-inline{
            .ant-form-item{
                display: flex;
                margin-bottom: 24px;
                margin-right: 0;

                .ant-form-item-label{
                    margin-right: 8px;
                    line-height:32px;
                }
                .ant-form-item-control-wrapper{
                    flex: 1;
                    vertical-align: middle;
                    display: inline-block;
                    .ant-form-item-control{
                        line-height: 32px;
                        height:32px;
                    }
                }
            }
        }
    }
    .table-operation-action{
        padding: 0 6px;
    }
    .tool-tip{
        margin-bottom: 24px;
    }
</style>