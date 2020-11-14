# 学习系统
需求 存储同学信息 OA
  - 学籍
    1. 同学信息登录及完善系统
      原型设计表单 小piu
    2. 照片上传功能
      云开发文件上传

  - 项目形式
    1. 小程序 用户端
      vant + 云开发
      微信/QQ小程序
    2. PC端的Admin 后台系统
      VUE + ElementUI
      分班级 分页 列表
      详情

  - 功能要求细分
    1. 角色区分 role -1>1>2>3>4>5>6 数字越大 权限越大
    Admin/Teacher/StuAdmin/Student|TryStudent
      user _id uid(学号 10000) pro_num has_resume
      has_job shixi_danwei zhuanzheng_danwei 
      shixi_paymeng zhuanzheng_paymeng score (荣誉)
      bid can_waibao 
      ban
        bid bname
    2. 试听功能|邀请功能 运营 分享
      生成图功能 百度一下
      https://juejin.im/post/6844903663840788493
    3. 学习跟进系统
      - github 提交 图
      收集gitthub账号
      https://github.com/SunKK-star
      position-relative  -> 图片     
      爬虫
    - 主动提交
      1. 每个人都一张图 新的覆盖旧的
        gitPic _id url uid bid
      2. ts(最后更新的时间) 标红
      3. 列表 按班级
    - 文章
      articles
      _id uid desc ts is_top love_num
      url
      love_num 怎么计算
      user love_num 0 articles count save
      > 0 写文章时 +1
      post_article
     - 项目
     - leetcode 算法 github
     - 外包
      即时计件 倒计时2 
      提交代码记录
      付费记录
      开源出去