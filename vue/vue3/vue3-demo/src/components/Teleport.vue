<template>
  <div class="confirm-modal">
    <button @click="isOpen = true">打开</button>
    <teleport to="#foot-container">
      <p v-if="isOpen">阿的撒敖德萨擦擦撒擦擦飒飒女士</p>
      <button @click="isOpen = false">取消</button>
    </teleport>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    let isOpen = ref(false)
 
    return {isOpen}
  }
}
</script>

<style>

</style>