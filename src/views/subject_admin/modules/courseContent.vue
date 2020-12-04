<template>
  <a-row :gutter="48">
    <a-col :md="16">
      <video autoplay controls="controls" src="https://www.w3school.com.cn/i/movie.ogg" width="100%"></video>
      <div>
        <h2>课程概述</h2>
        <div>
          <p> 本课程是过程安全管理的基础篇。阐述了过程安全事故的基本特点、过程安全管理系统包含的要素，并且对AQ/T3034所包含的12个要素的实施要求逐个做了说明。</p>
  通过本课程，学员可以了解过程安全管理相关的概念，掌握各要素执行落实方面应该满足的基本要求，是学员参与工厂过程安全管理的基础</div>
      </div>
    </a-col>
    <a-col :md="8">
      <l-timeline :data="courseList"></l-timeline>
    </a-col>
  </a-row>
</template>

<script>
import LTimeline from './LTimeline'

const courseList = [
  {
    courseChaptersTitle:'第一节 过程安全的概念',
    courseChild:[
      {
        courseName:'第一课 过程安全的概述一',
        courseTestId:"22222"
      }
    ],
    courseTest:null,
    isCurrentChapters:false
  },
  {
    courseChaptersTitle:'第二节 过程安全管理介绍',
    courseChild:[
      {
        courseName:'第一课 过程安全管理介绍一',
        courseTestId:null,
        courseChild:[
          {
            courseName:'工艺安全信息',
            courseTestId:"222333",
            isCurrentChapters:true
          },
          {courseName:'工艺危害分析',courseTestId:"33444"}
        ]
      }
    ],
    courseTest:null,
    isCurrentChapters:true
  }
]

export default {
  data(){
    return {
      courseList
    }
  },
  components:{
    LTimeline
  }
}
</script>