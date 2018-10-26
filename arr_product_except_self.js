// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

var productExceptSelf = function(arr) {
    let i = 0;
    let newArr = [];

    while (i<arr.length) {
      let temp = arr[i];
      arr[i] = 1
      let prod = arr.reduce( (x,y) => { return x*y })
      arr[i] = temp
      newArr[i] = prod
      i++
    }

    return newArr
};