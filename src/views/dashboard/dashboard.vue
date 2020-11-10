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
        
      </a-col>
      <a-col :span="6">
        2
      </a-col>
    </a-row>
  </div>
</template>

<script>
    const barData = []
    const barData2 = []
    for (let i = 0; i < 12; i += 1) {
        barData.push({
            x: `${i + 1}月`,
            y: Math.floor(Math.random() * 1000) + 200
        })
        barData2.push({
            x: `${i + 1}月`,
            y: Math.floor(Math.random() * 1000) + 200
        })
    }
  export default {
      data(){
          return {
              onlinePerson:112893,
              courseBuy:2331,
              businessNum:892,
              scrollNum:910,
              barData2
          }
      },

  }
</script>

<style type="less">
  .antd-statistic-num{
    text-align: center;
  }
</style>
