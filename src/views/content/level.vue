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
        <template slot="icon" slot-scope="text,record">
          <img :src="record.icon" alt="">
        </template>
        <template slot="action" slot-scope="text,record">
          <a href="javascript:void(0)">编辑</a>
          <a-popconfirm
            title="确定删除此头衔么？"
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
import {getLevelList} from '@/api/content'

const columns = [
  {title:"等级名称",dataIndex:"levelName"},
  {title:"学分条件",dataIndex:"integral"},
  {title:"ICON",dataIndex:"icon",scopedSlots:{customRender:"icon"}},
  {title:"创建时间",dataIndex:"createDate"},
  {title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},width:"120px"}
]

export default {
  data(){
    return{
      columns,
      loadData:parameter => {
        return getLevelList(Object.assign(parameter,{})).then(res=>{
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