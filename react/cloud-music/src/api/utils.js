export const getCount = (count) => {
  if(count< 0) return 
  if(count < 10000) {
    return count
  }else if (count/10000 < 10000) {
    return Math.floor(count/10000) + '万'
  } else {
    return Math.floor(count/10000/10000) + '亿'
  }

}