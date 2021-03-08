<template>
  <div id="app">
    {{ $store.state.count }}
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    $.ajax({
      url: "http://localhost:8080/a/b",
      type: "get",
      dataType: "jsonp", // 请求方式为jsonp
      jsonpCallback: "handleCallback", // 自定义回调函数名
      data: {},
      success: function(res) {
        console.log(res);
      }
    })
   
  },
};
</script>

<style lang="scss">
</style>
