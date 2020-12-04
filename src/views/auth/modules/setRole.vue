<template>
  <a-modal 
    title="设置角色"
    :visible="visible" 
    :confirmLoading="confirmLoading"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-form :form="form">
      <a-form-item>
        <a-select mode="multiple" v-decorator="['roleList',{rules:[{required: true, message: '请选择开始时间'}]}]">
          <a-select-option value="1">管理员</a-select-option>
          <a-select-option value="2">渠道管理员</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'
const fields = ['roleList']
export default {
  props:{
    visible:{
      type:Boolean,
      required:true
    },
    confirmLoading:{
      type: Boolean,
      default: () => false
    },
    dataModel:{
      type: Object,
      default: () => null
    }
  },
  data(){
    return {
      form:this.$form.createForm(this)
    }
  },
  created(){
    fields.forEach(v => this.form.getFieldDecorator(v))
  },
  watch:{
    dataModel(){
      this.dataModel && this.form.setFieldsValue(pick(this.dataModel,fields))
    }
  }
}
</script>