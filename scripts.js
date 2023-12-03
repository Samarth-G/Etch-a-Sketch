const container = document.querySelector('#container');
const width = container.scrollWidth;
let size = 16;

createGrid(16);

const edit = document.querySelector('#edit');
edit.addEventListener('click', () => {
    size = parseInt(prompt("Enter Gride Size:", "16"));
    deleteGrid();
    createGrid(size);
})

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', () => {
    deleteGrid();
    createGrid(size)
})

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = Math.floor(width/size) + 'px';
        cell.style.height = Math.floor(width/size) + 'px';
        cell.addEventListener('mouseover', () => {
            cell.classList.add('hover');
        });
    
        container.appendChild(cell);
    }
}

function deleteGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        container.removeChild(cell);
    });
}
