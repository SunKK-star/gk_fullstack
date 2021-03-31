module.exports = (opts, app) => {
  return async (ctx, next) => {
    console.log(opts);
    await next();
  }
}