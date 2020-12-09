<template>
  <div class="count">
  <h3>{{$store.state.a.count}}</h3> 
  <h2>{{count}}</h2>
  <h2>{{newCount}}</h2>
  <p>
    <button @click="addAction(5)">add</button>
    <button @click="reduce(10)">reduce</button>
  </p>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  // computed: {
  //   newCount() {
  //     return this.$store.state.count * 2
  //   }
  // }
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    test () {},
    ...mapMutations(['reduce']),
    ...mapActions(['addAction'])
  },
  // computed: mapState({
  //   newCount: state => state.count * 3
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  }
  // mounted() {
  //   this.msg = mapState(['count'])
  // }
}
</script>

<style>

</style>