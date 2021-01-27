
// 同步action，就是指action的值为一般对象
export const jiaaction = (data) => ({type: 'jia', data})

export const jianaction = (data) => ({type: 'jian', data})

// 异步action，就是指action的值为函数
export const jiaAsync = (data, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(jiaaction(data))
    }, delay)
  } 
}