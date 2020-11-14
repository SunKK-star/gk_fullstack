/**
 * @param {Array} nums
 * @return Array []
 */
const move_zeros = function(nums) {
     if (nums == null) {
         return;
     }
    let j = 0,
        //第一次遍历时，j指针记录非0的个数，只要是非零的都赋值给nums(j)
        for (let i = 0; i < nums.length; i++) {
            if (nums[i]!= 0) {
                nums[j++] = nums[i];
            }
            
        }
        //第二次遍历把末尾元素都赋值为0 
        for (let i = j; i < nums.length; i++) {
            nums[i] = 0;
            
        }
        return nums;
}
let nums1 = [0,1,0,3,12];
document.write(nums1 [2]);
console.log(move_zeros(nums));