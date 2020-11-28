<template>
  <div class="hom">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">+</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  created () {
    console.log('我是原生的created')
  },
  mixins: [addLog], // 将外部js文件混入vue对象中，会冲突，vue对象中的属性方法会覆盖混入的方法会被覆盖
  extends: app, // 扩展
  methods: {
    add () {
      this.num++
      console.log(this.num ** 2)
    }
  }
}
</script>

<style>

</style>
