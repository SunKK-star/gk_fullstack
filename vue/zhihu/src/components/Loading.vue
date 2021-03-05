<template>
  <div class="loading">
    <SyncOutlined style="fontSize: 100px;color: #0d6efd" spin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SyncOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  setup () {
    return {}
  },
  components: {
    SyncOutlined
  }
})
</script>

<style scoped>
.loading{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
</style>
