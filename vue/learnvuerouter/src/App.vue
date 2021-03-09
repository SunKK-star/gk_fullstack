<template>
  <div id="app">
    {{ $store.state.count }}
    <h1>{{totle}}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    
  },
  computed: {
    totle() {
      return this.$store.state.stu
    }
  }
};
</script>

<style lang="scss">
</style>
