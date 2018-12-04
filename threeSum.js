// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

function threeSum(arr) {
    arr = arr.sort( (x,y) => x-y)
    let ret = [];
  
    if (arr.length < 3) return ret
  
    for (let i=0; i<arr.length-2; i++) {
      let j=i+1;
      let k=arr.length-1;
  
      while (j<k) {
        let sum = arr[i] + arr[j] + arr[k]
  
        if (sum === 0) {
          ret.push([arr[i],arr[j],arr[k]])
          j++;
          k--;
  
          while (j<k && arr[j] == arr[j+1]) {
            j++;
          }
  
          while (j<k && arr[k] == arr[k-1]) {
            k--;
          }
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
    return ret
  }
  
  threeSum([4,5,6,-11,-3,4,-1])