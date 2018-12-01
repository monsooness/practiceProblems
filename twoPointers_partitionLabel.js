// A string S of lowercase letters is given. We want to partition this string into as many parts as possible so 
// that each letter appears in at most one part, and return a list of integers representing the size of these parts.

// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

var partitionLabels = function(S) {
    
    let SP = 0
    let EP = S.lastIndexOf(S[0])
    let result = [];
    
    for (let i=1; i<S.length; i++) {
      let cSP = S.indexOf(S[i])
      let cEP = S.lastIndexOf(S[i])
      
      if (cSP > SP && cEP < EP) {
          continue;
      } else if (cSP < EP && cEP > EP) {
          EP = cEP
      } else if (cSP > EP && cEP > EP) {
          result.push(EP - SP + 1)
          SP = cSP
          EP = cEP
          i = SP;
      }
    }
    result.push(EP - SP + 1)
    return result  
};


