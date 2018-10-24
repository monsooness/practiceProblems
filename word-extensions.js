// When people send messages on their phones they sometimes modify word spelling by 
// adding extra letters for emphasis. For example if you want to emphasize 'hello' you might 
// write it 'hellloooooooo'. I will be calling the extra letters a 'word extension'.
// Assumption: Regular text contains 2 or fewer of the same character in a row, 
// while word extensions have 3 or more of the same character in a row. (This will not in 
// practice work for all words in all languages. I explicitly state this assumption.)

// Question Part 1: Given an input string representing one word, find the start and end indices of all 
// extensions in the word. If the candidate is not sure what 'extension' means, I give an example:
// 'heeeello' should return [1,4].

function extensions(str) {
 let count = 1;
 let result = [];
 for (let i=0; i<str.length; i++) {
   while (str[i] === str[i+1]) {
     count++;
     i++;
   }
   if (count > 2) {
     result.push([i-count+1, i])
   }
   count = 1;
 }
 return result
}

extensions('heeeelllo')