class Tree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(data) {
    this.data = data,
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data)
  }
}

traverseDF(value) {
  let collection = [this.root]

  while (collection.length) {
    let node = collection.shift()

    if (node.data === value) {
      return true
    } else {
      collection.unshift(...node.children)
    }
  }
  return false
}

traverseBF(value) {
  let collection = [this.root]

  while(collection.length) {
    let node = collection.shift()

    if (node.data === value) {
      return true
    } else {
      collection.push(...node.children)
    }
  }
  return false
}