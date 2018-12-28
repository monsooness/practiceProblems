var Tree = function(value) {
  this.value = value;
  this.children = [];
}

var Queue = function() {
  let storage = [];

  this.enqueue = function(item) {
    storage.push(item)
  }

  this.dequeue = function() {
    return storage.shift()
  }
}

var filter = function(value, depth) {
  return value % 2
}

Tree.prototype.BFSelect = function(filter) {
  const queue = new Queue();
  const result = [];
  let current;

  queue.enqueue({tree:this, depth:0})

  while (current = queue.dequeue()) {
    if (filter(current.tree.value, current.depth)) {
      result.push(current.tree.value)
    }

    current.tree.children.forEach(child => 
      queue.enqueue({tree:child, depth: current.depth+1})
    );
  }

  return results;
}