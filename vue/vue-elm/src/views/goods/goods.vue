<template>
  <div class="page">
    <div class="goods">
      <div class="menu-wrapper" ref="nenuWrapper">
        <ul>
          <li class="menu-item" :class="index===currentIndex?'current':''" v-for="(item, index) in goods" :key="index" @click="selectMenu(index)">
            <span class="text">
              <support v-if="item.type > 0" :type="item.type" :size="3"></support>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list" v-for="(item,index) in goods" :key="index" ref="foodsList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="(foods,idx) in item.foods" :key="idx">
                <div class="icon">
                <img :src="foods.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{foods.name}}</h2>
                <p class="desc">{{foods.description}}</p>
                <div class="extra">
                  <span class="count">月售{{foods.sellCount}}</span>
                  <span>好评率{{foods.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{foods.price}}</span>
                  <span class="old" v-if="foods.oldPrice">￥{{foods.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartControl :food="foods"></cartControl>
                </div>
              </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <shopCart :selectFoods="selectFoods" :deliverPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopCart>
  </div>
</template>

<script>
import support from '@/components/support-ico/support-ico';
import cartControl from '@/components/cart-control/Cart-control';
import shopCart from '@/components/shop-cart/Shop-cart'
import { getGoods } from '@/api/index'
import BScroll from '@better-scroll/core'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      // currentIndex: 0,
      listHeight: [],
      scrollY: 0
    }
  },
  components: {
    support,
    shopCart,
    cartControl
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let heigth1 = this.listHeight[i]
        let heigth2 = this.listHeight[i + 1]
        if (!heigth2 || (this.scrollY >= heigth1 && this.scrollY < heigth2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let aaa = []
      for (let good of this.goods) {
        if (good.foods) {
          for (let food of good.foods) {
            if (food.count) {
              aaa.push(food)
            }
          }
        }
      }
      return aaa
    }
  },
  methods: {
    selectMenu(e) {
      this.currentIndex = e
      let foodsList = this.$refs.foodsList
      let el = foodsList[e]
      this.foodsScroll.scrollToElement(el, 300)
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.nenuWrapper, {
        click: true
      }),
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {  // this.foodsScroll 在vm对象定义一个属性
        click: true,
        probeType: 3
      }),
      this.foodsScroll.on('scroll', res => {
        this.scrollY = Math.abs(Math.round(res.y))

      })
    },
    _calculateHeight() {
      let foodsList = this.$refs.foodsList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodsList.length; i++) {
        let item = foodsList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  created () {
    getGoods().then((res) => {
      console.log(res);
      this.goods = res
      this.$nextTick(() => { // 只会在DOM渲染完成之后执行
        this._initScroll()
        this._calculateHeight()
      })
     
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
    background  $colorBackground-ssss
    .menu-item
      display flex
      align-items center
      justify-content center  
      width 60px
      height 54px
      padding 0 10px
      line-height 14px
      font-size $fontsize-small
      &.current
        background #fff
        font-weight 700
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size $fontsize-small
      color rgb(147,153,159)
      background-color $colorBackground-ssss
    .food-item
      display flex
      position relative
      margin 18px
      margin-bottom 18px
      &:last-child
        margin-bottom 0
    .icon
      flex 0 0 57px
      margin-right 10px
      img
        width 100% 
    .content 
      flex 1
      .name 
        margin 2px 0 8px 0
        height 14px
        line-height 14px
        font-size 14px
        color rgb(7, 17, 27)
      .desc, .extra 
        line-height 10px
        font-size 10px
        color rgb(147, 153, 159)
      .desc 
        line-height 12px
        margin-bottom 8px
      .extra 
        .count 
          margin-right 12px
      .price 
        font-weight 700
        line-height 24px
        .now 
          margin-right 8px
          font-size 14px
          color rgb(240, 20, 20)
        .old 
          text-decoration line-through
          font-size 10px
          color rgb(147, 153, 159)
      .cartcontrol-wrapper
        position absolute
        right 0
        bottom -15px
</style>