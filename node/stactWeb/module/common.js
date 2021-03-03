const fs = require('fs')
function getMine (extname) {
  switch (extname) {
    case '.html':
      return 'text/html'
    case '.css':
      return 'text/css'
    case '.js':
      return 'text/javascript'
    default:
      return 'text/html'
  }
}

function getFileine(pathname) {
  fs.readFile('./',(err, data) => {
    if(err) {
      console.log(err);
      return;
    }
    console.log(data);
  })
}

module.exports = {
  getMine
}