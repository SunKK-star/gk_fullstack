module.exports = (opts, app) => {
  // 返回一个异步的方法
  return async function(ctx, next) {
    console.log(new Date());
    await next(); 
  }
}