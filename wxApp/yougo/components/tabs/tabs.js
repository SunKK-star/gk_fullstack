// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    // currentIndex: {
    //   type: Number,
    //   value: 0
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e) {
      // console.log(e);
      let {index} = e.currentTarget.dataset
      // 触发父组件的自定义事件
      this.triggerEvent("tabsItemChange", {index})
    }
  }
})
