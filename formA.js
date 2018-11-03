// You are given two strings A and B (consisting of uppercase English alphabets). Your aim is to form string A by concatenating multiple copies of string B. However, before concatenating a copy of string B, you can remove any number of characters from it.

// For example,
// A = ‘ZAZA’
// B = ‘BAZ’
// You can form string A by concatenating three copies of string B as follows: ‘##Z’ + ‘#AZ’ + ‘#A#’.(# denotes the characters removed from string B).

// Question #1: Is it possible to form string A in this way?
// Question #2: If possible, what is the minimum copies of B required?

function formA(a,b) {
  let result = [];
  
  for (let j=0; j<a.length; j++) {
    let temp = '';
    for (let i=0; i<b.length; i++) {
      if (b[i] !== a[j]) {
        temp += '#'
      } else if (b[i] === a[j]) {
        temp += b[i]
        while(b[i+1] === a[j+1] && b<b.length ) {
          temp += b[i+1]
          i++;
          j++;
        }
      } 
    }
    result.push(temp)
  }
  
  if (result.every( (val, i, arr) =>  val === arr[0])) {
    return 'Cant form string A'
  } else {
    return result
  }
}

formA('ZAZA','ZAZ')
