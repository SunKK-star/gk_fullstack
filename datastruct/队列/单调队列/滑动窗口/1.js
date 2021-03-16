// 单调递减队列
var maxSlidingWindow = function(nums, k) {
  if(nums.length === 0 || !k) return [];
  const queue= [];
  const res = [];
  function pushOne(val) {
      while (queue.length && queue[queue.length - 1] < val) {
          queue.pop();
      }
      queue.push(val);
  }
  function shiftOne(val) {
      if(queue.length && queue[0] === val) {
          queue.shift();
      }
  }

  for(let i = 0; i < nums.length; i++) {
      if(i < k) {
          pushOne(nums[i])
      } else {
          pushOne(nums[i]);
          shiftOne(nums[i - k]);
      }
      if(i >= k - 1) {
          res.push(queue[0])
      }
  }
  return res;
};