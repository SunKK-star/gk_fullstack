<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link class="wrapper-item" to="/">商品</router-link>
        <router-link class="wrapper-item" to="/comment">评论</router-link>
        <router-link class="wrapper-item" to="/seller">商家</router-link>
      </div>
      <div class="page">
        <router-view :seller="seller"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import { getSeller } from '@/api'
import qs from 'query-string'
export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      },
      isActive: false
    }
  },
  methods: {
    handle () {

    }
  },
  components: {
    'v-header': Header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      console.log(seller);
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/variable.styl';
.tab
  width 100%
  .tab-wrapper
    width 100%
    height 35px
    display flex
    .wrapper-item
      flex 1
      display flex
      justify-content center
      align-items center
      text-decoration none
      color #666
      
    .router-link-exact-active
      border-bottom: 2px solid $color-red;
</style>