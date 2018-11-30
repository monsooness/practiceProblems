// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
// since a and b map to the same letter.


var findAndReplacePattern = function(words, pattern) { 

  function patternMapping(word, pattern) {
    let obj = {};
    let obj2 = {};
    if (word.length !== pattern.length) {
      return false
    } else {
      for (let i=0; i<word.length; i++) {
        if (Object.keys(obj).indexOf(word[i]) > -1 && obj[word[i]]!== pattern[i]) {
          return false  
        } else if (Object.keys(obj2).indexOf(pattern[i]) > -1 && obj2[pattern[i]]!== word[i]) {
          return false
        } else {
          obj[word[i]] = pattern[i]
          obj2[pattern[i]] = word[i]
        }
      }
      return true
    }
  }

  let result = words.filter( word => {
    return patternMapping(word, pattern)
  })
  return result
};
  findAndReplacePattern(["dkd","deq","mee","aqq","dkd","ccc"],'abb')