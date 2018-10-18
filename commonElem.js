//Given two sorted array, find the common elements in O(N) time

function commonElm(arr1, arr2) {
  let x = 0;
  let y = 0;
  let output = [];
  
  //the greedy way
  
  while (x<arr1.length || y<arr2.length) {
    if (arr1[x] === arr2[y]) {
      output.push(arr1[x])
      x++
      y++      
    } else if (arr1[x] > arr2[y]) {
      y++
    } else if (arr1[x] < arr2[y]) {
      x++
    }
  }
  return output
}

commonElm([3,4,5,7,8,9],[1,3,4,5,6,9])