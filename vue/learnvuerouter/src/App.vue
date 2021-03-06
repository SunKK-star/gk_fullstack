<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link :to="'/login/'+msg">登录</router-link>
    </div>
    <router-view />
    <hr/>
  </div>
</template>

<script>
import About from './views/About.vue'
export default {
  name: 'App',
  components: {
    About
  },
  data() {
    return {
      msg: "gk",
    };
  },
  methods: {
    toPage() {
      this.$router.push('/login')
    },
    handleTap(e) {
      console.log(e);
    }
  },
  computed: {
    getParams() {
      return this.$route.params.id || '没有东西'
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
