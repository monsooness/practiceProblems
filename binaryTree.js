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
  
  function findLargest(rootNode) {
    let current = rootNode;
    while (current) {
      if (!current.right) {
        return current.value 
      }
      current = current.right;
    }
  }
  

  
  let treeRoot = new BinaryTreeNode(100);
  let l1 = treeRoot.insertLeft(90);
  let r1 = treeRoot.insertRight(111)
  l1.insertLeft(80)
  l1.insertRight(105)
  r1.insertLeft(107)
  r1.insertRight(115)
  
  let treeRoot2 = new BinaryTreeNode(50)
  
  postOrder(treeRoot)