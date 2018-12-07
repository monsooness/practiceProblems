// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by 
// water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of 
// the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

var numIslands = function(grid) {
   
    let count = 0;
    function isIsland(grid, x, y) {
        if (x<0 || x>=grid.length || y<0 || y>=grid[0].length) return
        
        const value = grid[x][y]
        if (value == '1') {
            grid[x][y] = '#'
            isIsland(grid, x-1, y)
            isIsland(grid, x+1, y)
            isIsland(grid, x, y+1)
            isIsland(grid, x, y-1)
        }
    }
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                isIsland(grid, i, j)
            }
        }
    }
    return count
};