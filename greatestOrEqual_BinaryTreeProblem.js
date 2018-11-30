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


class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right
  }
}

function smallerOrEqual(root, number) {
 if (root === null) {
    return -1
  } else if (root.value === number) {
    return number
  } else if (root.value > number) {
    return smallerOrEqual(root.left, number)
  } else if (root.value < number ) {
    return Math.max(smallerOrEqual(root.right, number), root.value)
  }
}

let treeRoot = new BinaryTreeNode(100);
let l1 = treeRoot.insertLeft(90);
let r1 = treeRoot.insertRight(111)
l1.insertLeft(80)
l1.insertRight(105)
r1.insertLeft(107)
r1.insertRight(115)

smallerOrEqual(treeRoot, 113)
  
   
   