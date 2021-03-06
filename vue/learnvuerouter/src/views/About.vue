<template>
  <div class="about">
    <h1>关于</h1>
    <router-link to="/about/news">page1</router-link> | 
    <router-link to="/about/page">page2</router-link> |
    <router-link :to="{path: '/home', query: msg}">去首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:{
        name: 'gk',
        age: '23',
        gender: 'male'
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('handleHaha', this.msg)
    }
  }
}
</script>

<style>

</style>