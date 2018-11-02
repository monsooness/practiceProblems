//Given a collection of numbers that might contain duplicates, return all possible unique permutations.

function permutator (arr) {
    var permutations = [];
    if (arr.length === 1) {
      return [ arr ];
    }
  
    for (var i = 0; i <  arr.length; i++) { 
      let first = arr[i]
      var subPerms = permutator(arr.slice(0, i).concat(arr.slice(i + 1)));
      for (var j = 0; j < subPerms.length; j++) {
        temp = (first + subPerms[j])
        if (!permutations.includes(temp)) {
          permutations.push(temp)
        }
      }
    }
    return permutations;
  }
  

  //O(n^2)