<template>
  <div class="detail">
    {{$route.params.username}}的个人信息

    <button @click="goBack">返回首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // this.$router.push({path: '/',query: {id: 123}})
      this.$router.push({name: 'home',params: {id: 12345}})
    }
  }
}
</script>

<style>

</style>