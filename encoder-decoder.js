//encoding

  //Input: aaabbbbbcccaa
  //Output: a3b5c2a2 // encoding

//decoding

  //Input: a6b11
  //Output: aaaaaabbbbbbbbbbb

function encoder(str) {
  let arr = [];
  let count = 1;
 
  for (var i=0; i<str.length-1; i++) {
    if (str[i] === str[i+1]) {
      count ++
      
    } else {
      arr.push(str[i-1],count)
      count = 1
    }
  }
   arr.push(str[str.length-1],count)
  return arr;
 }



 function decoder(str) {
  let nums = ['1','2','3','4','5','6','7','8','9','0']
  let result = '';
  let letter = '';
 
  for (var i=0; i<str.length; i++) {
    var numbers = '';
    if (nums.includes(str[i])) {
    
      while(i<str.length && nums.includes(str[i])) {
        numbers += str[i]
         i++
      }
      i--
      for (var j=0; j<numbers; j++) {
       result += letter
      }
    } else {
      letter = str[i]
    }

  }
  return result
}