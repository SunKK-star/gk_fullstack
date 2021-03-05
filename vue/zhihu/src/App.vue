<template>
  <GlobalHeader :user="currentUser" />
  <Loading/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import Loading from './components/Loading.vue'
export default defineComponent({
  name: 'Vue',
  setup () {
    const currentUser = {
      isLogin: false,
      nickName: '露西',
      _id: 1,
      column: 123,
      email: 123456
    }
    const isLoading = false
    return {
      currentUser,
      isLoading
    }
  },
  components: {
    GlobalHeader,
    Loading
  }
})
</script>

<style>

</style>
