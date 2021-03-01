let arr = [8,7,89,2,54,818,15,5,6,4,82,5];

// 分割 合并

function mergeSort(arr) {  //[5,4,1,2,3]
  const len = arr.length;
  // 边界情况
  if (len <= 1) return arr;
  // 分割点
  const mid = Math.floor(len / 2);
  // 递归分割左子数组
  const leftArr = mergeSort(arr.slice(0,mid));
  // 递归分割右子树组
  const rightArr = mergeSort(arr.slice(mid));
  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr)
  return arr
}

function mergeArr(arr1, arr2) {
  let i = 0,j = 0;
  const res = [];
  const len1 = arr1.length;
  const len2 = arr2.length;
  while (i < len1 && j < len2) {
    if(arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    }else{
      res.push(arr2[j]);
      j++;
    }
  }
  if(i < len1){ // 此时i < len1则说明j >= len2,这两种一定是互斥关系
    return res.concat(arr1.slice(i));
  }else{
    return res.concat(arr2.slice(j));
  }
}

console.log(mergeSort(arr));