function test() {
  for(var i = 0; i < 10; i++) {

    setTimeout((function(){
      var temp=i;
      return function(){
        console.log(temp);
      }  
    })(),300)
  }
}
 test()
// for(var j = 0; j < 10; j++) {
//   myArr[j]()
// }