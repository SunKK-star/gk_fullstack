let fetch = require('node-fetch')

function* gen() {
  let url = 'https://api.github.com/users/github'
  let res = yield fetch(url)
  console.log(res.bio);
  }

  let g = gen() // 遍历器对象
  let result = g.next() // 执行异步任务的第一阶段 fetch(url)
  console.log(result);
  result.value.then(function(data) {
    return data.json()
  }).then(function(data) {
    g.next(data)
  })