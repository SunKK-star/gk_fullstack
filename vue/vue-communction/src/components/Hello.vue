<template>
  <div class="hello">
    {{message}}
    <hr/>
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    send () {
      this.$emit('sendData', this.msg)
    }
  },
  data () {
    return {
      msg: '我是子组件里的数据'
    }
  }
}
</script>

<style>
  .hello{
    color: brown;
    font-size: 20px;
    width: 100px;
    height: 50px;
    border: 2px dotted darkblue;
    margin: 0 auto;
  }
</style>