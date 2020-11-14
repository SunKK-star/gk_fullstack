# weui 源码分析

- src dist
  src 源码目录
  dist 编译过后

- css框架是70%常见业务
  1. reset 样式重置
  2. sylus 变量是替换关系
    ```stylus
      $weuiFontEN = -apple-system-font, "Helvetica Neue"
      $weuiFontSans = "PingFang SC", "Hiragino SansGB" "Microsoft YaHei"  //正则替换关系
      $weuiFontDefault = $weuiFontEN, $weuiFontSans
    ```
  3. stylus mixin 代码的封装及复用
    区别于函数，
    参数赋初值的写法
    ```css
      setTapColor($c=rgba(0,0,0,0,))
      -webkit-tap-highlight-color $c
    ```