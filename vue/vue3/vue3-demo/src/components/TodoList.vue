<template>
  <section class="todoapp">
    <header class="header">
      <h1>vue3 todos</h1>
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        class="new-todo"
        placeholder="想干的事"
      />
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo" v-for="(todo, index) in todos" :key="index">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label>{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(index)" ></button>
          </div>
        </li>
      </ul>
    </section>
    <div class="footer">
      <span class="todo-count">
        <strong>{{remaining}}</strong>left
      </span>
      <button class="clear-completed" @click="removeComplete">
        Clear-completed
      </button>
    </div>
  </section>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    
    let state = reactive({
      newTodo: "",
      todos: [],
      completed: false
    });

    function addTodo() {
      console.log(state.newTodo);
      let value = state.newTodo && state.newTodo.trim()
      state.todos.push({
        id: state.todos.length,
        title: value
      })
      state.newTodo = ''
      console.log(state.todos);
    }
    function removeTodo(index) {
      state.todos.splice(index, 1)
    }
    function removeComplete() {
      state.todos = state.todos.filter(item => !item.completed)
    }
    let remaining = computed(() => state.todos.filter(thing => !thing.completed).length) 
    return {
      ...toRefs(state), // 属性相同，打印前面的那个
      addTodo, 
      removeTodo,
      remaining,
      removeComplete
    };
  },
};
</script>

<style>
.header.fixed {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}
</style>