<template>
  <div class="antd-panel">
    <div class="tool-tip">
      <a-button type="primary">新建</a-button>
    </div>
    <s-table
      size="default"
      rowKey="id"
      :columns="columns"
      :data="loadData"
    ></s-table>
  </div>
</template>

<script>
import {STable} from '@/components'
import { getRoleList } from '@/api/auth'
const columns = [
  {
    title:"角色名称",
    dataIndex:"roleName"
  },
  {
    title:"角色描述",
    dataIndex:'roleDescribe'
  },
  {
    title:'创建时间',
    dataIndex:'createDate'
  },
  {
    title:'更新时间',
    dataIndex:'uploadDate'
  }
]
export default {
  data(){
    return {
      columns,
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return getRoleList(Object.assign(parameter, this.queryParam))
          .then(res => {
            console.log(res)
            return res.result
          })
      }
    }
  },
  components:{
    STable
  },
  created(){
    console.log(STable);
  }
}
</script>