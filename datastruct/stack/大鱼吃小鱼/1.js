
/* 
  nums1表示鱼大小的数组
  nums2表示鱼游动方向的数组
*/
const eatSmallFish = (nums1, nums2) => {
  let left = 0;
  let right = 1;
  stack = [];
  for (let i = 0; i < nums1.length; i++) {
    let curFishDirection = nums2[i];
    let curFishSize = nums1[i];
    // 当前的鱼是否被栈中的鱼吃掉
    let hasEat = false;
    while (stack.length && nums2[stack[stack.length - 1]] == right && curFishDirection == left) {
      if (nums1[stack[stack.length - 1]] > curFishSize) {
        hasEat = true;
        break;
      }
      stack.pop();
    }
    // 如果新来的鱼没有被吃掉，则压入栈中
    if (!hasEat) {
      stack.push(i);
    }
  }
  return stack;
}
  console.log(eatSmallFish([1, 2, 3,5,6,26], [1, 1, 0,1,0,1]));