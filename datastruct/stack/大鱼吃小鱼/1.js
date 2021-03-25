const eatSmallFish = (nums1, nums2) => {
  const fishNumber = nums1.length;
  const left = 0;
  const right = 1;
  let stack = [];
  for (let i = 0; i < fishNumber; i++) {
    let curFishDirection = nums2[i];
    let curFishSize = nums1[i];
    if (nums2[i] == 1) {
      stack.push(i)
    } else {
      while (nums2[stack[stack.length - 1]] !== 1) {
        if (!stack.length) {
          stack.push(i);
          continue;
        }
        let curidx = stack.pop();
        let bigOne = nums1[curidx] > nums1[i] ? curidx : i;
        stack.push(bigOne);
        continue;
      }
      stack.push(i);
    }
  }
  return stack.length
}


let arr = [4, 3, 2, 1, 5];
let arr1 = [0, 1, 0, 0, 0];
console.log(eatSmallFish(arr, arr1));