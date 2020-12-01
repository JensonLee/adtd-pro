<template>
  <div class="antd-page">
    <div class="antd-panel">
      <a-row :gutter="48">
        <a-col :md="16">
          <video autoplay controls="controls" src="https://www.w3school.com.cn/i/movie.ogg" width="100%"></video>
        </a-col>
        <a-col :md="8">
          <a-timeline>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
            <a-timeline-item color="red">
              <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
              Technical testing 2015-09-01
            </a-timeline-item>
            <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          </a-timeline>
        </a-col>
      </a-row>
      <div>
        <h2>课程概述</h2>
        <div>
          <p> 本课程是过程安全管理的基础篇。阐述了过程安全事故的基本特点、过程安全管理系统包含的要素，并且对AQ/T3034所包含的12个要素的实施要求逐个做了说明。</p>
  通过本课程，学员可以了解过程安全管理相关的概念，掌握各要素执行落实方面应该满足的基本要求，是学员参与工厂过程安全管理的基础</div>
      </div>
    </div>
  </div>
</template>