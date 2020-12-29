<template>
  <div id="app">
    <p>{{this.$store.vm.state.num}}</p>
    <p>{{this.$store.getters.getNum}}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    add() {
      this.$store.commit('add', 1)
    }

  }
}
</script>

<style>

</style>