<template>
  <div class="antd-panel">
    <div class="page-search-wrap">
        <a-form layout="inline">
            <a-row :gutter="48">
                <a-col :md="8" :sm="24">
                    <a-form-item label="课程编号">
                        <a-input v-model="queryParams.id" placeholder="请输入"/>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-form-item label="课程名称">
                        <a-input v-model="queryParams.courseName" placeholder="请输入"/>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-form-item label="课程分类">
                        <a-select placeholder="请选择" v-model="queryParams.courseClass"  default-value="0">
                            <a-select-option value="0">1</a-select-option>
                            <a-select-option value="1">2</a-select-option>
                            <a-select-option value="2">3</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-form-item label="行业类别">
                        <a-select placeholder="请选择" v-model="queryParams.tradesClass" default-value="0">
                            <a-select-option value="0">开启</a-select-option>
                            <a-select-option value="1">关闭</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-form-item label="领 域">
                        <a-select placeholder="请选择" v-model="queryParams.field" default-value="0">
                            <a-select-option value="0">1</a-select-option>
                            <a-select-option value="1">2</a-select-option>
                            <a-select-option value="2">3</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                    <a-button type="primary" @click="loadData">查询</a-button>
                    <a-button style="margin-left: 8px" >重置</a-button>
                </a-col>
            </a-row>
        </a-form>
    </div>
    <div class="antd-table-wrap">
      <s-table
        ref="table"
        size="default"
        rowKey='id'
        :columns="columns"
        :data="loadData"
      >
      </s-table>
    </div>
  </div>
</template>


<script>
import STable from '@/components/Table'
import {getCourse} from '@/api/course'

const columns = [
  {
    title:"课程编号",
    dataIndex:'id'
  },
  {
    title:"课程名称",
    dataIndex:'courseName'
  },
  {
    title:"所属领域",
    dataIndex:'field'
  },
  {
    title:"行业类别",
    dataIndex:'tradesClass'
  },
  {
    title:"课程分类",
    dataIndex:'courseClass'
  }
]
export default {
  data(){
    return{
      columns,
      queryParams:{
        responsibleId:this.$route.query.responsibleId
      },
      loadData: parameter => {
        return getCourse(Object(parameter,this.queryParams)).then(res=>{
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