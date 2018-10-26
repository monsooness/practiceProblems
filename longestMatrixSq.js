// You are given a square grid of size dxd. It contains each of the numbers 1..n, where n = d^2. The numbers each occur once and only once, in arbitrary order, find the length of the longest sequence of adjacent consecutive numbers in the grid. 
// For example, [[1 2 9] , [5 3 8] ,  [4 6 7]] 
// This contains three sequences of adjacent numbers [1, 2, 3], [4, 5], and [6, 7, 8, 9]. The longest is [6, 7, 8, 9], which has length 4, and therefore the answer is 4. 

let input = [[1,2,8],[5,3,9],[4,6,7]]
let input2 = [[1,2],[3,4]]

function longestMatrixSq(matrix) {
 let flatArr = [];
 for (var i=0; i<matrix.length; i++) {
   for (let j=0; j<matrix.length; j++) {
     flatArr.push(matrix[i][j])
   }
 }
 let len = matrix.length
 let c = Math.min( ...flatArr )
 let result = []
 let temp = [c]

 while (c < len*len) {
   let c_ind = flatArr.indexOf(c)
   let next = c + 1
   if (flatArr[c_ind+len] == next || flatArr[c_ind-len] == next || flatArr[c_ind+1] == next || flatArr[c_ind-1] == next) {
     temp.push(next)
     c = next
     console.log(temp,c, c_ind, next)
   } else {
     result.push(temp)
     c = c +1
   }
   
 }
 return result
}

longestMatrixSq(input)
