const addStrings = (num1, num2) => {
  let i = num1.length - 1; j = num2.length - 1; add = 0; res = [];
  while(i >=0 || j >= 0 || add != 0) {
    let x = i >= 0 ? num1.charAt(i) - "0" : 0;
    let y = j >= 0 ? num2.charAt(j) - "0" : 0;
    const result = x + y + add;
    res.push(result % 10);
    add = Math.floor(result / 10);
    i--;j--
  }
  return res.reverse().join("")
}

let data = new Date().toLocaleDateString()

console.log(data.toString());
