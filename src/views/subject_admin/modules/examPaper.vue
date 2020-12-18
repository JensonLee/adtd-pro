<template>
  <div>
    <a-form :form="form">
      <a-form-item label="菜单">
        <a-select v-decorator="[
          'type',
          { 
            initialValue: '1',
            rules:[{ required: true, message: 'Please select your favourite colors!' }]
          }
        ]">
          <a-select-option value="1">kkkkk</a-select-option>
          <a-select-option value="2">bbbbbb</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
/**
 * 试卷列表：
 *  subjectProblem：题目问题
 *  subjectType：题目类型  0-单选   1-多选
 *  rightKey : 正确答案
 *  describe  ：  答案说明、答题解析
 *  subjectId ：  题目ID、唯一标识
 *  subjectOption ：  题目选项、数组[{optionValue:'选项标识',optionDescribe:'选项详细'}]
 *  
 */
const examPaperList = [
  {
    subjectProblem:"从业人员有获得安全培训和教育的权利，下列哪些内容不是企业需要向从业人员提供的安全培训？",
    subjectType:"0",          
    rightKey:'B',
    describe:'题目相关答案说明文字',
    subjectId:"91289019",
    subjectOption:[
      {
        optionValue:'A',
        optionDescribe:'安全生产相关法律法规'
      },
      {
        optionValue:'B',
        optionDescribe:'企业组织架构及经营模式'
      },
      {
        optionValue:'C',
        optionDescribe:'相关事故案例及作业安全的要求'
      },
      {
        optionValue:'D',
        optionDescribe:'相关事故案例及作业安全的要求'
      }
    ]
  }
]

export default {
  data(){
    return {
      form:this.$form.createForm(this)
    }
  },
  created(){
  }
}
</script>