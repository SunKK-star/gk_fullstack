// function generateCapitalStringwithHashTag(str) {
//   // 1. 是否为空 .length == 0 null "" !
//   // 2. 是否超过140字
//   // 3. #
//   // 4. 每个单词都大写
  
//     return str.length > 140 || str == ''? false : '#' + str
//       .split(' ')
//       // es6 数组的新方法， 遍历数组的每一项， 并用一个函数处理
//       // 返回新的数组
//       .map(function(word) {
//         console.log(word);
//         // js string 内置
//         word.charAt(0).toUpperCase() + word.slice(1)

//         return word.charAt(0).toUpperCase() + word.slice(1)

//       })
//       .join(' ')
      
// }

function generateCapitalStringwithHashTag(str) {
  return str.length > 140 || str == '' ? false :
  '#' + str.split(' ').map(capitalize).join(' ')
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)

}
 
console.log(generateCapitalStringwithHashTag('hello world'));