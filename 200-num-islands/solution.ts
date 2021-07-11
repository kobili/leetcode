let grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

  let grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

function numIslands(grid: string[][]): number {
    let retVal: number = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                retVal++;
                DFSConvert(grid, i, j);
            }
        }
    }
    return retVal;
};

function DFSConvert(grid: string[][], row: number, col: number): void {
    if ( row < 0 || col < 0 || row >= grid.length || col >= grid[0].length ) {
        return;
    }

    if (grid[row][col] === "1") {
        grid[row][col] = "0";

        DFSConvert(grid, row - 1, col);         // up
        DFSConvert(grid, row + 1, col);         // down
        DFSConvert(grid, row,     col - 1);     // left
        DFSConvert(grid, row,     col + 1);     // right
    }
}

console.log(numIslands(grid1));
console.log(numIslands(grid2));