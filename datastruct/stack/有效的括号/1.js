// 三个判断条件：
// 1. 左边的括号数量不能多于右边 => 循环完毕后判断条件 stack.length 是否等于0
// 2. 右边的括号数量不能多于左边 => 循环体里判断条件 stack.length是否为空 
// 3. 左右括号是否匹配
let isValid = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (ch === '(' || '[' || '{') {
      stack.push(ch)
    }
    if (!stack.length) return false 
    if (ch == '(' && stack.pop() !== ')') return false
    if (ch == '[' && stack.pop() !== ']') return false
    if (ch == '{' && stack.pop() !== '}') return false
   }
  return stack.length === 0
}