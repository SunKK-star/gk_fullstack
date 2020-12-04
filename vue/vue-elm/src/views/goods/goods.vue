<template>
  <div class="page">
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" :class="index===currentIndex?'current':''" v-for="(item, index) in goods" :key="index" @click="selectMenu(index)">
            <span class="text">
              <span class="icon"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper"></div>
    </div>
  </div>
</template>

<script>
import { getGoods } from '@/api/index'
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      goods: {},
      currentIndex: 0
    }
  },
  methods: {
    selectMenu (e) {
      this.currentIndex = e
    }
  },
  created () {
    getGoods().then((res) => {
      console.log(res);
      this.goods = res
    }).catch((err) => {
      console.log(err);
    })
  }
};

</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
.goods
  display flex
  position absolute
  top 177px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    background  #f3f5f7
    .menu-item
      display flex
      align-items center
      width 56px
      height 54px
      padding 0 12px
      line-height 14px
      font-size $fontsize-small
      &.current
        background #fff
        font-weight 700
</style>