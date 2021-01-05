const threeSum = (nums) => {
  let nums = nums.sort((a, b) => a - b);
  const len = nums.length
  let res = [];
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1, k = len - 1;
    if (nums[i] > 0 || i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++; // 处理左指针重复的情况
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--; // 处理左指针重复的情况
        }
      } else {
        res.push([nums[i], unms[j], nums[k]])
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++; // 处理左指针重复的情况
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--; // 处理左指针重复的情况
        }
      }
    }
  }

  return res
}