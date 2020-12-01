<template>
  <div class="antd-page">
  <div class="antd-panel">
    <a-form-model
      ref="createCourse"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="课程类别" prop="courseType">
        <a-select v-model="form.courseType" placeholder="请选择课程类别">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="是否有试题" prop="isActive">
        <a-switch v-model="form.isActive" />
      </a-form-model-item>
      <a-form-model-item label="课程编号" prop="courseId">
        <a-input
          v-model="form.courseId" disabled/>
      </a-form-model-item>
      <a-form-model-item label="课程名称" prop="courseName">
        <a-input
          v-model="form.courseName"/>
      </a-form-model-item>
      <a-form-model-item label="行业类别" prop="tradesClass">
        <a-select v-model="form.tradesClass" placeholder="请选择行业类别">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="领域" prop="filed">
        <a-select v-model="form.filed" placeholder="请选择filed">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="课程负责人" prop="courseResponsible">
        <a-select v-model="form.courseResponsible" placeholder="请选择filed">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="负责人昵称" prop="responsibleCname">
        <a-input
          v-model="form.responsibleCname"/>
      </a-form-model-item>
      <a-form-model-item label="课程时长" prop="courseTime">
        <a-input
          v-model="form.courseTime"/>
      </a-form-model-item>
      <a-form-model-item label="课程分类" prop="courseClass">
        <a-select v-model="form.courseClass" placeholder="请选择filed">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="课程价格" prop="coursePrice">
        <a-input
          v-model="form.coursePrice"/>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 10, offset: 7 }">
        <a-button type="primary" @click="onSubmit">
          创建
        </a-button>
        <a-button style="margin-left: 10px;" @click="cancel">
          取消
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 10 },
      form: {
        courseType:'',
        isActive:true,
        courseId:'',
        courseName:'',
        tradesClass:'',
        filed:'',
        courseResponsible:'',
        responsibleCname:'',
        courseTime:'',
        courseClass:"",
        coursePrice:''
      },
      rules:{}
    }
  },
  methods:{
    onSubmit(){
      this.$refs.createCourse.validate(valid => {
        console.log(valid)
        if (valid) {
          console.log(this.form)
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancel(){
      this.$router.back()
    }
  }
}
</script>