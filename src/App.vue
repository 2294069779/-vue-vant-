<template>
  <div id="app">
    <div id="nav">
      <router-link to="/lhl">老黄历</router-link>|
      <router-link to="/yj">有价</router-link>|
      <router-link to="/cpp">车品牌</router-link>
    </div>
    <router-view />
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from './components/tabbar-ing.vue'

export default {
  components: {
    tabbar
  }
}
</script>

<style lang="less" scoped>
#nav {
  width: 100%;
  font-size: 20px;
  color: rgb(74, 244, 12);
  // vertical-align: middle;
  text-align: center;
  margin: 20px auto;
  .router-link-active {
    text-decoration: none;
    color:aquamarine;
  }
  a {
    text-decoration: none;
    color:black
  }
}
</style>
