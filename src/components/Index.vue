<template>
  <div> 
    <div class="header">
      <router-link to='/build' replace class="header-button">学生团建</router-link>
      <router-link to='/organization' replace class="header-button">学生组织</router-link>
      <router-link to='/entrepreneurship' replace class="header-button">创业墙</router-link>
      <a href='http://neau.hlj.qnzs.youth.cn/' class="header-button">青年之声</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 5vh;
  line-height: 5vh;
  display: flex;
  justify-content: space-around;
  .header-button {
    width: 100%;
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 14px;
  }
  .router-link-active {
    border-bottom: 3px solid #00c586;
  }
  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
}
</style>


<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
