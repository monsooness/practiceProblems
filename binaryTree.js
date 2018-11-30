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

  function findSmallest(rootNode) {
    let current = rootNode
    while (current) {
      if (!current.left) {
        return current.value
      }
      current = current.left
    }
  }


  function secondLargest(rootNode) {
    let current = rootNode;
    while(current) {
      if (current.value === null || (!current.left && !current.right)) {
        throw new Error('Tree must have more than 2 nodes')
      }
      if (!current.right && current.left) {
        return current.value
      } else if (current.right && !current.right.left && !current.right.right) {
        return current.value
      }
      current = current.right
    }
  }
  

  function inOrder(rootNode) {
    //left, root, right
    let result = [];
  
    function traverse(node) {
      if (node.value !== null) {
        if (node.right) {
          traverse(node.right)
        }
        result.push(node.value)
        if (node.left) {
          traverse(node.left)
        }
      } else {
        return 
      }
    }
  }
  
  function preOrder(rootNode) {
    //root, left, right
    let results = []
    function traverse(node) {
      if (node.value !== null) {
        results.push(node.value)
        if (node.left) {
          traverse(node.left)
        }
        if (node.right) {
          traverse(node.right)
        }
      } else {
        return 
      }
    }
    traverse(rootNode)
    return results
  }
  
  function postOrder(rootnode) {
    //left, right, root
    let results = [];
    function traverse(node) {
      if (node.value !== null) {
        if(node.left) {
          traverse(node.left)
        } 
        if (node.right) {
          traverse(node.right)
        }
        results.push(node.value)
      } else {
        return 
      }
    }
    traverse(rootnode)
    return results;
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