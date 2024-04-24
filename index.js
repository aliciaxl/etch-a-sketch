const container = document.querySelector("#container");
let rowNum = 16;
let columnNum = rowNum;

let makeGrid = () => {
    for (let i = 0; i < rowNum; i++) {
    const rowCells = document.createElement("div");
    rowCells.id = "rowCells";
    container.appendChild(rowCells);
        for (let i = 0; i < columnNum; i++) {  
            const columnCells = document.createElement("div");
            columnCells.id = "columnCells";
            rowCells.appendChild(columnCells);
      } 
    }
};
makeGrid();

document.querySelector("#numofSquares").onclick = function() {
    let numSquares = prompt("How many squares per side?");
    container.remove();
    let rowNum = numSquares;
    makeGrid();
};
