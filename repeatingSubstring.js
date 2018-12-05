// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

var lengthOfLongestSubstring = function(s) {
    let lookup = {};
    let start = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (lookup[s[i]] !== undefined && lookup[s[i]] >= start) {
            start = lookup[s[i]] + 1;
        }
        lookup[s[i]] = i
        max = Math.max(max, i - start + 1);
    }
    return max;
};