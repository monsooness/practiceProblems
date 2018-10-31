// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by 
// deleting some characters of the given string. If there are more than one possible results, return the 
// longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]
// Output: 
// "apple"

// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]
// Output: 
// "a"

var findLongestWord = function(s, d) {
    function isValid(word) {
    let i=0;
    let j=0;
    let temp = '';
    while (j<s.length) {
      if (word[i] === s[j]) {
        temp += word[i]
        i++;
        j++;
      } else {
        j++;
      } 
    }
    return temp.length === word.length
  }
  
  let output = '';
  d.forEach( word => {
    if (isValid(word)) {
      if (output.length < word.length) {
        output = word
      } else if (word.length === output.length){
        if (word.valueOf() < output.valueOf()) {
          output = word
        } 
      } 
    }
  })

  return output
};