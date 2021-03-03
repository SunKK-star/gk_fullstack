//  判断服务器上面有没有upload目录。如果没有创建这个目录，如果有的话不做操作。（图片上传）

const fs = require('fs')
const path = './upload'

fs.stat(path,(err, data) => {
  if(err) {
    // 执行创建目录
    mkdir(path);
    return;
  }
  if(!data.isDirectory()) {
    console.log(data.isDirectory());
    // 删除文件再去执行创建
    fs.unlink(path,(err) => {
      if(!err) {
        mkdir(path)
      }else{
        console.log('请检测传入的数据是否正确');
      }
    });
  }
})

function mkdir(dir) {
  fs.mkdir(dir,(err) => {
    console.log(err);
    return;
  })
  console.log('创建成功');
}