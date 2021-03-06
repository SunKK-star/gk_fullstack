<template>
  <div>
    <h1>{{fYd}}</h1>
    <button @click="addtion">+</button>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  components: {

  },
  data() {
    return {
      msg: 18,
      age: 20
    }
  },
  props: {
    fYd: {
      type: Array,
      required: true,
      default: () => {
        return [1,25,61,'156']
      }
    }
  },
  methods: {
    addtion() {
      this.$emit("handleTap", this.msg,this.age)
    }
  }
}

let ss = function() {

}
</script>

<style>

</style>