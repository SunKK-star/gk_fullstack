<template>
  <div class="wrap">
    AAAAAAAAA
    <button @click="sendA">click</button>
  </div>
</template>

<script>
import Bus from '@/bus/index'
export default {
  data () {
    return {
      item: '我是组件A里的数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA', this.item)
    }
  }
}
</script>

<style>

</style>