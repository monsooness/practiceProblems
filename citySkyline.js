// In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 
// At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.
// What is the maximum total sum that the height of the buildings can be increased?

// Example:
// Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// Output: 35
// Explanation: 
// The grid is:
// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7]
// The skyline viewed from left or right is: [8, 7, 9, 3]

// The grid after increasing the height of buildings without affecting skylines is:

// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]



var maxIncreaseKeepingSkyline = function(grid) {
    let iMax = [];
    let jMax = [];
    for (var i=0; i<grid.length; i++) {
        iMax.push(Math.max( ...grid[i]))
        for (var j=0; j<grid.length; j++) {
            jMax.push(grid[i][j])
            if (jMax[j] < grid[i][j]) {
              jMax[j] = grid[i][j]
            }
        }
    }
    jMax = jMax.slice(0, grid.length)
    let final = [];

    for (let i=0; i<grid.length; i++) {
      for (let j=0; j<grid.length; j++) {
        if (grid[i][j] == iMax[i] ) {
          final.push(0)
        } else if (grid[i][j] == jMax[j]) {
          final.push(0)
        } else {
           let greater;
           if (iMax[i] > jMax[j]) {
             greater = jMax[j]
           } else {
             greater = iMax[i]
           }
           final.push(greater - grid[i][j])
        }
      }
    }

    return final.reduce( (x,y) => { return x+y})
};