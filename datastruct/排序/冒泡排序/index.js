let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if(arr[j + 1] < arr[j]) {
        let flag = arr[j];
        arr[j] = arr[j + 1];
        arr[j+ 1] = flag
      }
    }
  }
  return arr
}


let arr = [2,1,56,23,02,3,6,5,9,100];
console.log(bubbleSort(arr));