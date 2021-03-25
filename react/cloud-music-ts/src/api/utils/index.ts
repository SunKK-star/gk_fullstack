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
export const debounce = function (fn: Function, delay: number) {
  let timer: any = null;
  return function (this: any, ...args: any[]) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timer);
    }, delay)
  }
}


// 处理数据，找出第一个没有歌名的排行榜的索引
export const filterIndex = (rankList: any) => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};

// 处理歌手列表拼接歌手名字
export const getName = (list: any) => {
  let str = "";
  list.map ((item: any, index: any) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

// 判断一个对象是否为空
export const isEmptyObject = (obj: any) => !obj || Object.keys(obj).length === 0;


