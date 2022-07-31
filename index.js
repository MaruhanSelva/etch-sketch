const container = document.querySelector('#container');

// for loop to make square grid
function drawGrid(number) {
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (let i = 0; i < number * number; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.width = 400 / number + 'px';
        content.style.height = 400 / number + 'px';
        container.appendChild(content);
        content.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'black';
        });
        
    }
}



function clearGrid() {
    document.querySelectorAll(".content").forEach(el => el.remove());
}

let number = 16;

const buttonSection = document.querySelector('#buttonSect');
const sizeButton = document.createElement('button');
sizeButton.textContent = 'Change Size';
sizeButton.addEventListener('click', (e) => {
    number = parseInt(prompt("enter a new size for the grid"));
    if (number > 100) {
        number = 100;
    }
    clearGrid();
    drawGrid(number);
});

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Grid';
clearButton.addEventListener('click', (e) => {
    const cells = document.querySelectorAll(".content").forEach(el => 
        el.style.background = 'white')
});



buttonSection.appendChild(clearButton);
buttonSection.appendChild(sizeButton);



drawGrid(16);
