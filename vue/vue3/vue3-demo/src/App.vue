<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button> -->

  <!-- <ul>
    <Farganment :data="[5,3,4,1,8,9,2]"></Farganment>
  </ul> -->
  <!-- <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000"></AsyncComponent>
    </template>
    <template #fallback>
      <h1>加载中...</h1>
    </template>
  </Suspense> -->
  <TodoList></TodoList>
  
  <!-- <Fargament></Fargament> -->
</template>

<script> 
// import AsyncComponent from './components/AsyncComponent.vue'
import TodoList from './components/TodoList.vue'
// import TeleportDemo from './components/Teleport.vue'
// import Fargament from './components/Fargament.vue'
// composition API   这只是一个概念
// import {reactive, computed, ref, onMounted} from 'vue'  // 只会打包引入的依赖
export default { // compositionAPI 的入口
  // setup() { // 
  // const {state, double} = userCounter(1)
  //   let num = ref(2) // ref操作原始类型
  //   function add() {
  //     state.count++
  //     num.value += 10
  //     // console.log(state.count);
  //   }
  //   onMounted(() => {
  //     console.log('onMounted');
  //   })
  //   return {state,add,double,num}
  // } ,
  components: {
    TodoList
  }
}
// function userCounter (count) {
//   const state = reactive({
//     count
//   })
//   const double = computed(() => state.count * 2)
//   return {state, double}
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
