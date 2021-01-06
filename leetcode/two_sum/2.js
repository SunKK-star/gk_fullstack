// 双指针
// 给定两个有序的整数数组nums1,nums2,请将nums2合并到num1中，使得nums1成为一个有序的数组

// 1. 定义两个指针，分别指向两个数组生效的部分的尾部
// 2. 每次只对指针所指的元素比较，去其中较大的元素，把它从num1的末尾往前填补

// const merge = function(nums1, m, nums2, n) {
//   let i = m - 1, j = n - 1, k = m + n - 1;
//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       num2[k] = nums1[i]
//       i--
//       k--
//     } else {
//       nums1[k] = nums2[j]
//       j--
//       k--
//     }
//   }
//   // nums2 有剩余
//   while (j >= 0) {
//     nums1[k] = nums2[j]
//     k--
//     j--
//   }
// }

const merge = () => {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--;
      k--;
    } else {
      nums1[k] = nums2[j]
      j--;
      k--;
    }
  }
  if (j >= 0) {
    while (j >= 0) {
      nums1[j] = nums2[j];
      j--
    }
  }
  return nums1
}