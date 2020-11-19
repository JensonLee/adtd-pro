<template>
  <div class="antd-panel">
    <a-list
      :dataSource="messageList"
      rowKey='id'
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
        :description="item.content"
        >
          <h3 slot="title">{{ item.dateTime }}</h3>
        </a-list-item-meta>
      </a-list-item>
      <div slot="footer" v-if="messageList.length > 0" style="text-align: center; margin-top: 16px;">
        <a-button @click="loadMore" :loading="loadingMore">加载更多</a-button>
      </div>
    </a-list>
  </div>
</template>

<script>
import {getMessageList} from '@/api/content'
export default {
  data(){
    return{
      messageList:[],
      loading:true,
      loadingMore:false
    }
  },
  mounted(){
    this.getList()
  },
  methods:{
    getList(){
      getMessageList().then(res=>{
        this.messageList = res.result
      })
    },
    loadMore(){
      this.loadingMore = true;
      getMessageList().then(res=>{
        this.messageList = this.messageList.concat(res.result)
      }).finally(()=>{
        this.loadingMore = false
      })
    }
  }
}
</script>