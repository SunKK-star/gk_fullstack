// var count = 0
// function add() {
//   count++
//   console.log(count);
// }

function add() {
  var num = 0
  function a() {
    console.log(num++);
  }
  return a
}