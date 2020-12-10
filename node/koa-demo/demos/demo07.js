const koa = require('koa')
const app = new koa()
const route = require('koa-router')

const main = (ctx, next) => {  // use包裹的函数学名叫中间件
  ctx.body = 'hello'
  // console.log(ctx.request);
}

app.use(route.get('/abc', main))

app.listen(3000)