//Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//You are given a target value to search. If found in the array return its index, otherwise return -1.
//You may assume no duplicate exists in the array.
//Your algorithm's runtime complexity must be in the order of O(log n).

function rotatedArraySearch (rotated, target) {
  var minInd = 0, maxInd = rotated.length-1;
 
  while (minInd <= maxInd) {
    var midInd = Math.floor((minInd+maxInd)/2);
    if(target === rotated[midInd]){
      return midInd;
    }
 
    if(rotated[midInd] <= rotated[maxInd]){ 
      if(target < rotated[midInd] || target > rotated[maxInd]){
         maxInd = midInd-1;
       } else {
         minInd = midInd+1; 
       }
    } else if(rotated[midInd] >= rotated[minInd] ) { 
      if(target>rotated[midInd] || target < rotated[minInd]){
        minInd = midInd+1;
      } else {
        maxInd = midInd-1; 
      }
    }
  } 
  return -1;
}
