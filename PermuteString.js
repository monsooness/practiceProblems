var permute = function(nums) {
  let results = [];
  
  if (nums.length === 1) {
      results.push(nums)
      return results
  }
  
  for (let i=0; i<nums.length; i++) {
      let first = nums[i];
      let left = nums.slice(0,i) + nums.slice(i+1)
      let innerPermutation = permute(left)
      
      for (let j=0; j<innerPermutation.length; j++) {
          results.push(first + innerPermutation[j])
      }
  }
  return results
};