const fs = require('fs')

fs.readFile('./test.js', 'utf-8', (err, content) => {
  console.log(content);
})

let arr = [1,2,3]
arr.forEach((item, index, arr) => {
  console.log(item);
})

// callback promise async + await
function readFile (cb) {
  // 
  setTimeout(() => {
    cb('hello world')
  }, 2000)
}

readFile((c) => {
  console.log(c);
})