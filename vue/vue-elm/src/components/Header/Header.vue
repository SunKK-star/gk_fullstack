<template>
  <div class="header" @click="showDetail">
    <div class="container-wrapper">
      <div class="avatar">
        <img
          width="64"
          height="64"
          :src="seller.avatar"
          alt=""
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support" v-if="seller.supports">
          <support-ico :size=1 :type="seller.supports[0].type"></support-ico>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">
        {{seller.bulletin}}
      </span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img  width="100%" height="100%" :src="seller.avatar" alt="">
    </div>
    <header-detail :seller="seller" v-show="detailVisable" @hide="hideDetail"></header-detail>
  </div>

</template>

<script>
import headerDetail from '@/components/header-detail/Header-detail'
import support from '@/components/support-ico/support-ico';

export default {
  data () {
    return {
      detailVisable: false
    }
  },
  components: {
    'support-ico': support,
    'header-detail': headerDetail
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    showDetail () {
      this.detailVisable = true
    },
    hideDetail (e) {
      this.detailVisable = e
    }
  }
};
</script>

<style lang="stylus">

@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';
.header
  position relative
  background $colorBackground-ss
  overflow hidden
  color $fontColor
  .container-wrapper
    padding 24px 12px 18px 24px
    display flex
    position relative
    .avatar
      margin-right 16px
      flex 0 0 64px
      img 
        border-radius 2px
    .content
      flex 1
      .title
        display flex
        margin-bottom 8px
        align-items center
        .brand
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          font-size $fontsize-large
          font-weight 700
          margin-left 6px
      .description
        font-size 12px
        line-height 12px
        margin-bottom 8px
      .support
        &-ico
          margin-right 4px
        .text
          font-size $fontsize-small-s
          line-height 12px
    .support-count
      text-align center
      position absolute
      background $colorBackground-sss
      border-radius 14px
      bottom 12px
      height 24px
      width 48px
      right 12px
      .count
        font-size $fontsize-small-s
      .icon-keyboard_arrow_right
        font-size $fontsize-small-s
        line-height 24px
        margin-left 2px

  .bulletin-wrapper
    background-color $colorBackground-sss
    line-height 28px
    height 28px
    padding 0 8px
    display flex
    justify-content center
    align-items center
    .bulletin-title
      bg-image('bulletin')
      background-repeat no-repeat
      background-size 22px 12px
      width 22px
      height 12px
      flex 0 0 22px
      margin-right 4px
    .bulletin-text
      display -webkit-box
      overflow hidden
      -webkit-box-orient vertical
      -webkit-line-clamp 1
      font-size 10px
      flex 1
    .icon-keyboard_arrow_right
      flex 0 0 10px
      font-size $fontsize-small-s
  .background
    position absolute
    filter blur(10px)
    height 100%
    width 100%
    top 0
    left 0
    z-index -1


</style>