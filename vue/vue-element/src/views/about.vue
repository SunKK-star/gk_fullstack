<template>
  <div class="about">
    <ul>
      <li><router-link :to="{name: 'detail', params: {username: '张三'}}">张三</router-link></li>
      <li><router-link :to="{name: 'detail', params: {username: '王二'}}">王二</router-link></li>
      <li><router-link :to="{name: 'detail', params: {username: '李四'}}">李四</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>