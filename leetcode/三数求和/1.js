// const threeSum = (nums) => {
//   let nums = nums.sort((a, b) => a - b);
//   const len = nums.length
//   let res = [];
//   for (let i = 0; i < len - 2; i++) {
//     let j = i + 1, k = len - 1;
//     if (nums[i] > 0 || i > 0 && nums[i] === nums[i - 1]) {
//       continue
//     }
//     while (j < k) {
//       if (nums[i] + nums[j] + nums[k] < 0) {
//         j++;
//         while (j < k && nums[j] === nums[j - 1]) {
//           j++; // 处理左指针重复的情况
//         }
//       } else if (nums[i] + nums[j] + nums[k] < 0) {
//         k--;
//         while (j < k && nums[k] === nums[k + 1]) {
//           k--; // 处理左指针重复的情况
//         }
//       } else {
//         res.push([nums[i], unms[j], nums[k]])
//         j++;
//         k--;
//         while (j < k && nums[j] === nums[j - 1]) {
//           j++; // 处理左指针重复的情况
//         }
//         while (j < k && nums[k] === nums[k + 1]) {
//           k--; // 处理左指针重复的情况
//         }
//       }
//     }
//   }

//   return res
// }


const threeSum = (nums) => {
  // 给数组排序，开启循环
  // 每次循环选定一个指定元素，前后指针分别向右和向左推进，找出满足条件的元素
  let res = []
  let arr = nums.sort((a, b) => a - b);
  let len = arr.length;
  let l, r = len - 1

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 || arr[i] == arr[i + 1]) continue
    l = i + 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] > 0) {  // 此时右指针所指向的值过大，指针需要左移
        r--;
        while (l < r && arr[r] == arr[r + 1]) {
          r--
        }
      } else if (arr[i] + arr[l] + arr[r] < 0) { // 此时左指针所指向的值过小，指针需要右移
        l++;
        while (l < r && arr[l] === arr[l - 1]) {
          l++
        }
      } else {
        res.push([arr[i], arr[l], arr[r]]);
        l++;
        r--;
        while (l < r && arr[l] === arr[l - 1]) {
          l++
        };
        while (l < r && arr[r] == arr[r + 1]) {
          r--
        }
      }
    }
  }
  return res
}

let arr = [1, 5, 2, 7, 45, 0]
console.log(threeSum(arr));