# 原始数据类型有几种
  boolean null undefinde number string symbol

# null是对象吗？

# typeof能正确判断的类型是？
 typeof只能识别基本类型，除了null ,其余都判断为对象

# 判断引用数据类型要用instanceof
  instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上
  instanceof 只能判断引用类型


  # 类型转换
    转为布尔值
    转为数字
    转为字符串
    - 对象转原始值
    对象在转类型的时候会调用内置的 [[ToPrimitive]]
     - 如果已经是原始类型，那就不用转换了
     - 调用 x.valueOf(), 如果转为了原始类型，就返回值,如果没有转化为原始类型，则：
     - 调用 x.toString(), 如果转为了原始类型，就返回值，还没有转化成功，则报错   （空数组调用toString()为空字符串 ），字符串加上任何东西都为字符串

  # 四则运算
    运算中其中一方为字符串，另一方一定会转换成字符串
      如果一方不是数字或字符串，那就会把它转换成数字或字符串进行运算


  # 深浅拷贝 (copy.js)
    Object.assign() 如果拷贝的是原始值类型，那么是深拷贝。如果拷贝的是引用类型，那么是浅拷贝
    解构也一样

    JSON.parse(JSON.stringify()) 的缺陷：
      1. 会忽略undefined
      2. 会忽略symbol
      3. 不能序列化函数
      4. 不能解决循环引用的对象
