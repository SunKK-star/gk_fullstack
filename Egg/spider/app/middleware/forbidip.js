module.exports = (opts, app) => {
  return async function (ctx, next) {
    await next();
  }
}
