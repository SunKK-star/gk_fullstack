<template>
  <div id="app">
    <h1>{{$store.state.count}}</h1>
    <button @click="addition">+</button>
    <button @click="reducer">-</button>

    <h1><!--33 getters相关信息 --></h1>
    <h2>{{$store.getters.powerCount}}</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    reducer() {
      this.$store.commit('decrement')
    }
  },
  created: () => {
  }
}
</script>

<style>

</style>
