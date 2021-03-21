const maxResult = (nums, k) => {
  if(!nums.length || !k) return null;
  let queue = [], contract = [];
  function pushOne (val) {
    while (queue.length && queue[queue.length - 1] < val) {
      queue.pop();
    }
    queue.push(val)
  }
  function popOne (val) {
    if(queue.length && val === queue[0]) {
      queue.shift();
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if(i === 0) {
      queue.push(nums[i]);
      contract.push(nums[i]);
    } else if (i < k) {
        let val = Math.max(...contract);
        pushOne(val + nums[i]);
        contract.push(val + nums[i]);
    } else {
      let value = Math.max(...contract);
      pushOne(value + nums[i]);
      contract.push(value + nums[i])
      popOne(contract.shift());
    }
  }
  return queue[0]
}


let arr = [1,-1,-100,-1000,100,3]
console.log(maxResult(arr, 2));