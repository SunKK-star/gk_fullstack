<template>
  <div class="login">
    <h1>登录页</h1>
    <button @click="toAbout">去关于页</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'haha'
    }
  },
  methods: {
    toAbout() {
      console.log(this.$router);
      this.$router.push({
        path: '/about',
        query: {
          name: 'gh',
          age: 23,
          gender: 'male'
        }
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(11111);
    next()
  }
}
</script>

<style>

</style>