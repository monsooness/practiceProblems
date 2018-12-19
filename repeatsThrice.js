// Given a contiguous sequence of numbers in which each number repeats thrice, there is exactly one missing number. 
// Find the missing number.
// eg: 11122333 : Missing number 2
// 11122233344455666 Missing number 5


function missingNumber(nums) {
    let num = nums.toString()
  
    let counter = 1;
    let result = [];
  
    for (let i=0; i<num.length; i++) {
      if (num[i] === num[i+1]) {
        counter++
      } else {
        if (counter < 3) {
          result.push(num[i])
          counter = 1
        } else {
          counter = 1
        }
      }
    }
    return result
  }
  
  missingNumber(1122233344455666)