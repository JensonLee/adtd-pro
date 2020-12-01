<template>
  <a-modal 
    :width="600"
    title="新增用户"
    :visible="visible" 
    :confirmLoading="confirmLoading"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-form :form="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }">
      <a-form-item label="用户ID" v-show="dataModel && dataModel.id">
        <a-input disabled  v-decorator="['id']" />
      </a-form-item>
      <a-form-item label="姓名">
        <a-input v-decorator="['userName', {rules: [{required: true, min: 2, message: '请输入至少两个字符的姓名！'}]}]"/>
      </a-form-item>
      <a-form-item label="账号">
        <a-input v-decorator="['account', {rules: [{required: true, min: 5, message: '请输入至少五个字符的账号！'}]}]"/>
      </a-form-item>
      <a-form-item label="登录密码">
        <a-input type="password" v-decorator="['password', {rules: [{required: true, min: 6, message: '请正确输入密码格式，英文字母开头加数字'}]}]"/>
      </a-form-item>
      <a-form-item label="性别">
        <a-radio-group v-decorator="['gender']">
          <a-radio value="男">男</a-radio>
          <a-radio value="女">女</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="QQ">
        <a-input v-decorator="['phoneNo']" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'

//添加的form字段 在这边进行完善
const fields = ['id','userName','account','password','gender','phoneNo']
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
    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 dataModel 发生改变时，为表单设置值
    this.$watch('dataModel', () => {
      this.dataModel && this.form.setFieldsValue(pick(this.dataModel, fields))
    })
  }
}
</script>