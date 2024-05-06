const container = document.querySelector("#container");
let rowNum;
const columnNum = rowNum;

function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }


let makeGrid = (rowNum) => {
    for (let i = 0; i < rowNum; i++) {
    const rowCells = document.createElement("div");
    rowCells.className = "rowCells";
    container.appendChild(rowCells);
    const columnNum = rowNum;
        for (let i = 0; i < columnNum; i++) {  
            const columnCells = document.createElement("div");
            columnCells.className = "columnCells";
            rowCells.appendChild(columnCells);
            columnCells.addEventListener ('mouseover', () => {
            const randomColor = `rgb(${random(50, 255)}, ${random(50, 255)}, ${random(50, 255)})`
                columnCells.style.backgroundColor = randomColor;
            })
      } 
    }
};
makeGrid(16);

document.querySelector("#numofSquares").onclick = () => {
    container.innerHTML = ''
    let rowNum = prompt("How many squares per side? (1-100)");
makeGrid(rowNum);
};
