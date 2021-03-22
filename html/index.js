import $ from 'jquery'

$.ajax({
  async : true,
  url : "https://api.douban.com/v2/book/search",
  type : "GET",
  dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
  jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
  jsonpCallback: 'handleResponse', //设置回调函数名
  data : {
      q : "javascript", 
      count : 1
  }, 
  success: function(response, status, xhr){
      console.log('状态为：' + status + ',状态是：' + xhr.statusText);
      console.log(response);
  }
});

