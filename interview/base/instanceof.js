// 

// function instance_of(L, R) { // []
//   L = L.__proto__ // Array.prototype
//   if(L == R.prototype) {
//     return true
//   }
// }
// let arr = []
// console.log(instance_of(arr, Array));

// let a = []
// console.log(a.__proto__);


function instance(left,right){
  left=left.__proto__
  right=right.prototype
  while(true){
       if(left==null)
            return false;
       if(left===right)
            return true;
       left=left.__proto__
  }
}


 