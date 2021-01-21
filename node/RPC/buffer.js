// const buffer = Buffer.from('wn')
// const buffer2 = Buffer.from([1,2,3,4,5,6])

// const buffer3 = Buffer.alloc(20)

// buffer2.writeInt8(12,1)
// buffer2.writeInt16LE(512,2)

// console.log(buffer2);
// console.log(buffer);
// console.log(buffer3);


const fs = require('fs')

const protobuf = require('protocol-buffers')
const schema =  protobuf(fs.readFileSync(__dirname + '/buffer.proto', 'utf-8'))

console.log(schema);
