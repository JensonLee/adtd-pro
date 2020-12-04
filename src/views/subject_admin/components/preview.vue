<template>
  
  <div class="antd-page">
    <div class="antd-panel">
      <a-tabs>
        <a-tab-pane key="1" tab="课程内容">
            <course-content />
        </a-tab-pane>
        <a-tab-pane key="2" tab="考题列表">
          2222
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import CourseContent from './../modules/courseContent'

export default {
  data(){
    return {

    }
  },
  components:{
    CourseContent
  }
}
</script>