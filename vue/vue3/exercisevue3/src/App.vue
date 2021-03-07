<template>
  <h1>{{ state.count }}</h1>
  <h1>{{num}}</h1>
  <h3>{{double}}</h3>
  <button @click="add">累加</button>
</template>

<script>
import {reactive, computed, ref, onMounted} from 'vue'
export default {
  // composition api
  setup() {
    // 入口
    const state1 = {
      count: 1,
    };
    const {state, double} = userCount(state1.count)
    let num = ref(1)
    function add() {
      state.count++
      num.value++
      console.log(state.count, num);
    }
    // const double = computed(() => state.count * 2)
    onMounted(() => {
      console.log(123);
    })
    return {
      state,
      add,
      num,
      double
    };
  },
}
function userCount(count) {
  const state = reactive({
    count
  })
  const double = computed(() => {
    state.count * 2
  })
  return {
    state,
    double
  }
}
</script>

<style>
</style>
