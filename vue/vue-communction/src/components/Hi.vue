<template>
  <div class="hi">
    <p @click="sendHi">{{hi}} {{fromHi}}</p>
  </div>
</template>

<script>
export default {
  props: ['fromHi'],
  data () {
    return {
      msg: 'hi,welcome',
      hi: '我是hi组件里的数据'
    }
  },
  methods: {
    sendHi () {
      this.$emit('sendHI',this.hi)
    }
  }
}
</script>

<style>

</style>