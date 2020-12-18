<template>
  <div class="antd-page">
    <a-row class="antd-panel">
      <a-col :span="6">
        <router-link to="">
          <a-statistic title="在线人数" :value="onlinePerson" class="antd-statistic-num" />
        </router-link>
      </a-col>
      <a-col :span="6">
        <router-link to="">
          <a-statistic title="课程购买量" :value="courseBuy" class="antd-statistic-num" />
        </router-link>
      </a-col>
      <a-col :span="6">
        <router-link to="">
          <a-statistic title="企业总数" :value="businessNum" class="antd-statistic-num" />
        </router-link>
      </a-col>
      <a-col :span="6">
        <router-link to="">
          <a-statistic title="学院总数" :value="scrollNum" class="antd-statistic-num" />
        </router-link>
      </a-col>
    </a-row>
    <a-row class="antd-panel">
      <a-col :span="18">
        <ve-map :data="chartData" :settings="chartSettings"></ve-map>
      </a-col>
      <a-col :span="6">
        2
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import China from 'echarts/map/json/china.json'
  export default {
    data(){
      this.chartSettings = {
        mapOrigin: China,
        position: 'china',
        dimension: '位置',
        label:false,
        metrics: ['用户数量'],
        dataType: {
          '面积': 'KMB'
        },
        mapGrid:{
          left: "auto",
          right: "24px",
          top: "auto",
          bottom: "auto"
        }
      }
      return {
          onlinePerson:112893,
          courseBuy:2331,
          businessNum:892,
          scrollNum:910,
          chartData: {
            columns: ['位置', '用户数量'],
            rows: [
              { '位置': '吉林', '用户数量': 123 },
              { '位置': '北京', '用户数量': 1223},
              { '位置': '上海', '用户数量': 2123},
              { '位置': '浙江', '用户数量': 4123}
            ]
          }
      }
    },
    created(){
      // console.log(this.chartData);
    }
  }
</script>

<style type="less">
  .antd-statistic-num{
    text-align: center;
  }
</style>
