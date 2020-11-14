const Koa = require('koa')
const router = require('koa-router')  // 路由用于定义接口
const app = new Koa()

const main = ctx => {
 
    ctx.response.body = 'Hello World'
}


const about = ctx => {
  ctx.response.type('html')
  ctx.response.body('<a>Index Page</a>')
}

app.use(router.get('/about', about))
app.use(router.get('/', main))
app.listen(3000, () => {
  console.log('3000端口已启动');
})