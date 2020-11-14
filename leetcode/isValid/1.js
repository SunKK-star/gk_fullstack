// var isValid = function(str) {
//   var a = str.split('')
//   console.log(a);
//   var b = a.join('')
//   console.log(b);
// }

// isValid("jcisjis")
// var str = [1,2,3,6]
// for(var value of str) {
//   console.log(value);
// }
// console.log(str.map((a) => {
//   return a*a
// }));
// var arr = [
//   { id: 1, text: 'aa', done: true },
//   { id: 2, text: 'bb', done: false }
// ]
// console.log(arr.filter(item => item.done))

// 栈的实现
// var Stack = function() {
//   this.data = [];
//   this.top = 0;

// this.push = function(e) {
//   this.data[this.top++] = e;
// }
// this.pop = function() {
//   this.top--
// }
// this.peek = function() {
//   return this.data[this.top - 1]
// }
// this.size = function() {
//   return this.data[0].length;
// }
// this.clear = function() {
//   this.top = 0;
// }

// }
  var Stack =function (){
    let items = []
    
    this.push = function(element){
        items.push(element)
    }
    this.pop = function(){
       return items.pop()
    }
    this.peek = function(){
        return items[items.length - 1]
    }
    this.isEmpty = function(){
        return items.length === 0
    }
    this.size = function(){
        return items.length
    }
    this.clear = function(){
        items = []
    }
    this.print = function(){
        console.log(items.toString())
    }
}
var isValid = function(str) {
  var strList = str.split('')
  var stack = new Stack();
  for(var i = 0; i < strList.length; i++) {
    if(strList[i] == '(' || strList[i] == '[' || strList[i] == '{') {
      stack.push(strList[i])
    } else {
      if(stack.size() == 0) {
        return false
      }
      var a = stack.peek()
      stack.pop()
      var match
      if(strList[i] == ')' ) {
        match = '('
      } else if(strList[i] == ']') {
        match = '['
      } else{
        match = '{'
      }

      if(a != match) {
        return false
      } 
    }
    }
    if(stack.size() != 0) {
      return false
  } else {
    return true
  }
  
}
 

// console.log(isValid('[]'));
console.log(isValid('{{([])}'));