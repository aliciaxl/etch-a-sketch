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
            const randomColor = `rgb(${random(72, 112)}, ${random(183, 223)}, ${random(101, 141)})`
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


document.querySelector("#clearGrid").onclick = () => {
    let gridBox = document.querySelectorAll(".columnCells");
    console.log(gridBox);
    gridBox.forEach(element => {
        element.style.backgroundColor = "rgb(247, 225, 182)";
    })
};

