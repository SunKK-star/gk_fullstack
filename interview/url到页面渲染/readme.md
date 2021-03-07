<!-- 上 -->
# 定位
IP协议 =》DNS解析 

<!-- 下 -->
# 浏览器收到HTML文件
1. 词法分析 -> 解析为标记（一段又一段的代码） =》 node节点 =》 DOM树
转化为DOM树先搁置

# 浏览器接收到css
步骤同上 =》 CSSOM树
递归这个CSSOM树，确定具体的元素到底是什么样式

# 生成渲染树
DOM树 + CSSOM树 = render树
渲染树只会包含需要显示的节点 （不包含类似于有display：none的节点）

# 回流 
gpu绘制页面
根据render树绘制页面布局

# 为什么操作DOM性能很差？
1.造成多线程通信
  操作DOM性能会使得多线程并发执行
2.可能引起重绘和回流


# 什么情况会阻塞渲染
当读取到script文件后会阻塞DOM树的构建
html， css 会阻塞
defer 不会阻塞script文件代码 按顺序执行
async  跳过script文件代码 

# 重绘和回流
回流： 节点的几何信息发生变化
重绘： 节点更改不影响布局
回流一定会重绘
重绘不一定会回流


会导致性能问题的操作： 
1. 改变window大小(页面回流)
2. 改变字体大小（回流）
3. display：none
4. offsetTop 等获取和设置几何信息的操作都会引发回流

# 减少回流和重绘
1. 用visablility代替display: none
2. 不要把节点的属性值放在一个循环里面当成循环的变量
for (let i = 0; i < 100; i++) {
    console.log(document.querySelector('.text').style.offsetTop);
  }
3. 尽量不要用table布局