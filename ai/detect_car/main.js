const fs = require('fs');
const AipOcrClient = 
  require('baidu-aip-sdk').ocr;

const APP_ID = "23083118";
const API_KEY = "MsU55qA5n59uyasVKgmhKKGn";
const SECRET_KEY = "aPZOGwbsQ67k60NFQASoNIMFnAHmntMT";
// sync  I/O  Async 同步 
const image = fs.readFileSync("car1.jpg")
  .toString("base64");
// console.log(image);
const options = {};
options["multi_detect"] = "true";

const client = 
  new AipOcrClient(APP_ID,
    API_KEY, SECRET_KEY);

client
  .licensePlate(image, options)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  })