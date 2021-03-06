<template>
  <div class="home">
    <h1>首页</h1>
    <h2 v-show="$route.query.name">{{$route.query}}</h2>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
}
</script>
