<template>
  <div class="antd-panel">
    <div class="tool-tip">
      <a-button type="primary">新建</a-button>
    </div>
    <div class="antd-table-wrap">
      <s-table
        ref="table"
        rowKey="id"
        :columns='columns'
        :data='loadData'
      >
        <template slot="img" slot-scope="text,record">
          <img :src="record.img" alt="">
        </template>
        <template slot="action" slot-scope="text,record">
          <a href="javascript:void(0)">编辑</a>
          <a-popconfirm
            title="确定删除此广告么？"
            ok-text="确定"
            cancel-text="取消"
            placement="topLeft"
            @confirm="handleDelete(record)"
          >
            <a href="javascript:void(0)" class="table-operation-action">删除</a>
          </a-popconfirm>
        </template>
      </s-table>
    </div>
  </div>
</template>

<script>
import STable from '@/components/Table'
import {getAdvertList} from '@/api/content'

const columns = [
  {title:"广告位置",dataIndex:"imgOffset"},
  {title:"显示顺序",dataIndex:"showIndex"},
  {title:"图片",dataIndex:"img",scopedSlots:{customRender:"img"}},
  {title:"链接地址",dataIndex:"src"},
  {title:"创建时间",dataIndex:"createDate"},
  {title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}
]

export default {
  data(){
    return{
      columns,
      loadData:parameter => {
        return getAdvertList(Object.assign(parameter,{})).then(res=>{
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
    handleDelete(record){
      this.$message.info(JSON.stringify(record))
    }
  }
}
</script>