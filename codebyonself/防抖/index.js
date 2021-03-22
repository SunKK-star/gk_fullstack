let debounce = function (fn, delay) {
  let timer = null;
  return function () {
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}