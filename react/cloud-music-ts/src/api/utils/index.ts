export const getCount = (count: number) => {
  if(count < 0) return 
  if (count < 10000) {
    return count
  } else if ( Math.floor(count / 10000) < 10000) {
    return Math.floor (count/1000)/10 + "万";
  } else {
    return Math.floor (count / 10000000)/ 10 + "亿";
  }
}


// 防抖
export const debounce = (func: Function, delay: number) => {
  let timer: any;
  return function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout (timer);
    }
    timer = setTimeout (() => {
      func.apply(this, args);
      clearTimeout (timer);
    }, delay);
  }
}
