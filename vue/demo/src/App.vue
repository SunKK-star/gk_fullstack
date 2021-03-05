<template>
  <div id="app" >
    <ul>
      <li @click="tapHandle(inx)" :class="{'active': currentInx === inx}" v-for="(m, inx) in movies" :key="inx">{{m}}</li>
    </ul>
    <h2 :style="{fontSize: font_color + 'px'}">fjskdljfs</h2>
    <h3>{{totlePrice}}</h3>
    <h4>{{fullName}}</h4>
    <div @click="divClick">
      <!-- .stop v-on的修饰符，用来阻止冒泡事件 -->
      <button @click.stop="buttonClick(font_color, $event)">按钮</button>
    </div>

    <!-- .prevent 阻止默认事件 -->
    <form action="baidu">
      <input type="submit" value="提交" @click.prevent="handleSubmit">
    </form>
    <!-- 监听键盘某个键帽的点击 -->
    <input type="text" name="" id="" @keyup.enter="handleKey">
    <!-- once修饰符的使用 -->
    <Hello1/>
  </div>
</template> 

<script>
import Hello from './components/Hello'
export default {
  name: 'App',
  components: {
    Hello1: Hello
  },
  data() {
    return {
      movies: ['海王', '海尔兄弟', '火影忍者', '进击的巨人'],
      isActive: true,
      currentInx: null,
      font_color: 20,
      books: [
        {id: 1, name: 'unix编程艺术', price: 119},
        {id: 2, name: '代码大全', price: 120},
        {id: 3, name: '操作系统', price: 113},
        {id: 4, name: '计算机网络', price: 169},
      ]
    }
  },
  methods: {
    addition(){
      this.count++;
    },
    tapHandle(idx) {
      this.currentInx = idx
    },
    fontStyle() {
      return 
    },
    buttonClick(e,event) {
      console.log('buttonClick');
    },
    divClick() {
      console.log('divClick');
    },
    handleSubmit() {
      console.log(123);
    },
    handleKey(e) {
      console.log(e);
    }
  },
  computed: {
    totlePrice: function() {
      return this.books.reduce((pre, cur) => {
        return cur.price + pre
      }, 0)
    },
    fullName: {
      get: function() {
        return this.movies
      }
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
