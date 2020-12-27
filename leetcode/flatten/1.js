
  let res = []
  let flatten = (arr) => {
    for (let i of arr) {
      if (Object.prototype.toString.call(i).slice(8, -1) === 'Array') {
        flatten(i)
      
      } else {
        res.push(i)
      
      }
    }
    return res
  }


