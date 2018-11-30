// Input: ["cba","daf","ghi"]
// Output: 1
// Explanation: 
// After choosing D = {1}, each column ["c","d","g"] and ["a","f","i"] are in non-decreasing sorted order.
// If we chose D = {}, then a column ["b","a","h"] would not be in non-decreasing sorted order.


var minDeletionSize = function(A) {
  let output = new Set
  for (let i=0; i<A.length-1; i++) {
    for (let j=0; j<A[i].length; j++) {
      if (A[i][j] > A[i+1][j]) {
        output.add(j)
      }
    }
  }
  return [...output].length
};