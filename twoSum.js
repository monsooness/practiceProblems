function twoSum(arr, num) {
  let obj = {};
  let ans = [];

  for (var i=0; i<arr.length; i++) {
    let delta = num - arr[i] 
    if (obj[delta] !== undefined) {
      ans.push([delta, arr[i]])
    }
    obj[arr[i]] = arr[i]
  }
  return ans
}

twoSum([1,3,4,5,2,4,6,7],9)

//using hashmap for its constant look up time