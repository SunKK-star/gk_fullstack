// 合并排序
let arr = [8,7,89,2,54,818,15,5,6,4,82,5];
function mergeArr(arr1, arr2) {
  let i = 0, j = 0, arr = []
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
    }
    
  }
  if(i >= arr1.length) {
    return arr.concat(arr2.slice(j))
  } else {
    return arr.concat(arr1.slice(i))
  }
}

function mergeSort(arr) {
  let len = arr.length;
  if(len <= 1) return arr;
  // 划分不同的子结构
  
  let mid = Math.floor(len / 2);
  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));
  // 遍历子结构获取子结构信息
  return mergeArr(leftArr, rightArr);
}


console.log(mergeSort(arr));