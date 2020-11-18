// 课程负责人model
<template>
  <a-modal
    title="新建课程负责人"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="ok"
    @cancel="cancel"
  >
    <p>请确定字段，根据传入字段编写form的表单<span v-if="model">,以下是模拟出来的传入字段：</span></p>
    {{model}}
  </a-modal>
</template>

<script>
export default {
  props:{
    visible:{
      type:Boolean,
      default:true
    },
    confirmLoading:{
      type:Boolean,
      default:false
    },
    model:{
      type:Object,
      default:null
    }
  },
  methods:{
    ok(){
      this.$emit('ok')
    },
    cancel(){
      this.$emit('cancel')
    }
  },
  created(){
    
  },
  watch:{
    "model":()=>{
      console.log(2)
    }
  }
}
</script>