<template>
  <div class="page">
    <p class="p">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </p>

    <!--路由入口-->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style>
.fade-enter{

}
.fade-leave{

}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave-active{
  /* transition: opacity: 0.5s; */
}
.page {
  text-align: center;
}
</style>