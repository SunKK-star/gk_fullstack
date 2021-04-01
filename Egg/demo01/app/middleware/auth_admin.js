module.exports = (options, app) => {
  return async (ctx, next) => {
    if(ctx.session && ctx.session.userInfo) {
      await next()
    } else {
      if(ctx.request.url === '/') {
        await next();
      } else {
        ctx.redirect('/'); 
      }
    }
  }
}