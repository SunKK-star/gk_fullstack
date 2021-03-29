// 给定一个正整数数组和 k，要求依次取出 k 个数，输出其中数组的一个子序列，需要满足：1. 长度为 k；2.字典序最小。

// 输入：nums = [3,5,2,6], k = 2
// 输出：[2,6]

// 边界1：如果数组右边有一个最小的数，这个数会把左边的数全部消除，然后递增栈中就只剩下这个数，这显然就与题目要求的k
// 个数不符。此时我们就需要控制递增栈的个数，在预知到入栈会消除栈中的个数使得不满足题意，我们就不消除，直接入栈。


// 边界2：如果数组是一个单调数列，这样这个数组里的元素就会全部入单调栈，这样也不满足条件。这时我们就要取单调栈的前k个元素

const findSmallSeq = (nums, k) => {
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    let left = nums.length - (i + 1)
    while(stack.length && left + stack.length >=  k && stack[stack.length - 1] > nums[i]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }
  
  while (stack.length > k) {
    stack.pop();
  }
  return stack;
}

console.log(findSmallSeq([3,5,2,6], 3));

