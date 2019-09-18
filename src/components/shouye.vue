<template>
<div class="home">
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="yellow"
  text-color="black"
  active-text-color="#ffd04b"
  router
  >
  <el-menu-item index="/shouye/message">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="/shouye/buycar">购物车</el-menu-item>
    <el-menu-item index="">客服</el-menu-item>
    <el-menu-item index="2-3">店铺</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item ><a href="https://www.taobao.com" target="_blank">订单管理</a></el-menu-item>
  <el-menu-item index="/mymessage"><a>练习</a></el-menu-item>
</el-menu>



<router-view/>

</div>


</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style>

  
</style>
