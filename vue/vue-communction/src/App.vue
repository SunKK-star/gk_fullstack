<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Hello v-bind:message="title" fromHi="fromHi" v-on:sendData="getData"/>
    <Hi :sendHI="getHi"/> -->
    <!-- {{fronChild}} -->

    <A/>
    <B/>
  </div>
</template>

<script>
// import Hello from '@/components/Hello.vue'
// import Hi from '@/components/Hi.vue'
import A from '@/components/A'
import B from '@/components/B'

export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      fronChild: '',
      fromHi: ''
    }
  },
  components: {
    // Hello,
    // Hi
    A,
    B
  },
  methods: {
    getData (e) {{
      this.fronChild = e
    }},
    getHi (e) {
      this.fromHi = e
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
