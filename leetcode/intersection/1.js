let intersection = function(nums1, nums2) {
  let map = new Map(); // {key: value}
  let set = new Set(); // 存不可重复的value
  nums2.forEach((item) => {
    map.set(item, true)
  })
  for (let num of nums1) {
    if(map.has(num)) {
      set.add(num)
    }
  }
  return Array.from(set.values())
}