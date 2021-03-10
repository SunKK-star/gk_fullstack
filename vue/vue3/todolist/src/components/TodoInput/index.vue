<template>
  <div class="todo-input">
    <input 
    type="text"
    v-model="todoValue"
    @keyup="setTodoVal"
     />
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'
export default defineComponent({
  name: 'TodoInput',
  setup () {
    const todoValue = ref<string>('');
    const setTodoVal = (e: KeyboardEvent): void => {
      if(e.keyCode == 13 && todoValue.value.trim().length) {
        alert(todoValue.value);
        todoValue.value = '';
      }
    }

    return {
      todoValue,
      setTodoVal
    }
  }
})
</script>

<style>

</style>