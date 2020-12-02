const fs = require('fs');
const AipImageClassifyClient = 
  require('baidu-aip-sdk').imageClassify;

const APP_ID = "23082442";
const API_KEY = "kNSRDFoSipQTCNxCqqix7vQQ";
const SECRET_KEY = "wqhnukP4w7n7lGD47n9cgWmXD63Rizb3";
// sync  I/O  Async 同步 
const image = fs.readFileSync("car.jpg")
  .toString("base64");
// console.log(image);

const client = 
  new AipImageClassifyClient(APP_ID,
    API_KEY, SECRET_KEY);

client
    // http 协议
    // 云端 AI sdk 
  .carDetect(image)
  .then((result) => {
    console.log(result.result);
  }).catch(err => {
    console.log(err);
  })
