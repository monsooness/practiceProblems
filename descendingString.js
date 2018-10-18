// Given a string, sort it in descending order of occurences
// Example: Input 'HELLO'
// Output should be LHEO
//     i.      L comes twice so first
//     ii.      H, E & O comes once so they follow the order in which they appear     
    

function descendingOcc(str) {
  let obj = {};

  for (var i=0; i<str.length; i++) {
    obj[str[i]] === undefined ? obj[str[i]] = 1 : obj[str[i]] += 1
  }
  
  let sorted = Object.keys(obj).sort( function(x,y) {
    return obj[y] - obj[x]
  })

  return sorted
}

descendingOcc('hello')