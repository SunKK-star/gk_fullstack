const isValid = (str) => {
  let arr = str.split("");
  if(!str.length) return true
  if(str.length % 2 !== 0 ) return false;
  let match = (bracket) => {
    if (bracket === "}") {
      return "{"
    } else if (bracket === ")") {
      return "("
    } else {
      return "["
    }
  }
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") {
      stack.push(arr[i])
    } else {
      let node = stack.pop()
     if(match(arr[i]) !== node) {
       return false;
     }
    }
  }
 return stack.length === 0;
}


console.log(isValid("(({{}})"));
