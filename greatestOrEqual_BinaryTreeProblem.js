// We have a binary search tree and a number N. Our task is to find the greatest number in the binary search tree that is 
//less than or equal to N. Return the value of the element if it exists otherwise return -1.

// E.g.  given the below binary search tree,

//                               5
//             3                                8
//     1           4                  6              11
// 0      2                                          9          13

// Input: N = 2 
// Output: 2

// Input: N = 11
// Output: 9

// Input: N = 3
// Output: 3


function greatestNumber(root, number) {
  if (root.val === null) {
    return -1
  } else if (root.val === number) {
    return number
  } else if (root.val > number) {
    return greatestNumber(root.left, number)
  } else if (root.val < num ) {
    return Math.max(greatestNumber(root.right, number), root.val)
  }
}
  
   
   