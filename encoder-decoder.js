//encoding

//Input: aaabbbbbcccaa
//Output: a3b5c2a2 // encoding

//decoding

//Input: a6b11
//Output: aaaaaabbbbbbbbbbb

function encoder(str) {
 let arr = [];
 let count = 1;

 for (var i=0; i<str.length; i++) {
   if (str[i] === str[i+1]) {
     count ++
   } else {
     arr.push(str[i-1],count)
     count += 1
   }
 }
 return arr;
}



function decoder(str) {
 let nums = ['1','2','3','4','5','6','7','8','9','0']
 let result = ''
 let letter = ''
 for (var i=0; i<str.length; i++) {
   console.log(i, 'hi')
   var numbers = ''
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
     console.log(letter)
   }

 }
 console.log(result)
}

decoder('a20b11')