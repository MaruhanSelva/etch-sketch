let number = 16;
let mode = "draw"; 
let mouseDown = false;
let block = "images/oak_plank.png";
let curBlock = document.querySelector(".curBlock");


const container = document.querySelector('#container');
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
        content.addEventListener('mouseenter', gridColour);
        content.addEventListener('mousedown', (e) => {
            mouseDown = true;
            gridColour(e);
        });
    }
}

function mouseState() {
    if (mouseDown === true) {
        mouseDown = false;
    } else {
        mouseDown = true;
    }
}

function gridColour(e) {
    if (mouseDown == true) {
        if (mode === "draw") {
            e.target.style.backgroundImage = "url(" + block + ")";
            e.target.style.backgroundSize = "" + (400/number) + "px " + (400/number) + "px";
            //e.target.style.background = 'black';
        } else {
            e.target.style.backgroundImage = 'none';
           // e.target.style.background = 'white';
        }
    }
}

function clearGrid() {
    document.querySelectorAll(".content").forEach(el => el.remove());
}

const sizeButton = document.querySelector("#changeSize");
sizeButton.addEventListener('click', (e) => {
    number = parseInt(prompt("enter a new size for the grid"));
    if (number > 100) {
        number = 100;
    }

    if (number <= 0) {
        number = 1;
    }
    clearGrid();
    drawGrid(number);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', (e) => {
    const cells = document.querySelectorAll(".content").forEach(el => 
        el.style.background = 'white')
});

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener('click', () => {
    if (mode === "erase") {
        mode = "draw"
        curBlock.src = block;
    } else {
        mode = "erase";
        curBlock.src = "images/eraser.png";
    }
});

function blockUpdate() {
    if (mode != "erase") {
        curBlock.src = block;
    }
}





// Logic For Buttons
const oak_wood = document.querySelector("#oak_w");
oak_wood.addEventListener('click', () => {
    block = "images/oak.jpeg";
    blockUpdate();
});

const oak_plank = document.querySelector("#oak_p");
oak_plank.addEventListener('click', () => {
    block = "images/oak_plank.png";
    blockUpdate();
});

const birch_plank = document.querySelector("#birch_p");
birch_plank.addEventListener('click', () => {
    block = "images/birch_plank.png";
    blockUpdate();
});

const birch_wood = document.querySelector("#birch_w");
birch_wood.addEventListener('click', () => {
    block = "images/birch.png";
    blockUpdate();
});

const acacia_wood = document.querySelector("#acacia_w");
acacia_wood.addEventListener('click', () => {
    block = "images/acacia.png";
    blockUpdate();
});

const acacia_plank = document.querySelector("#acacia_p");
acacia_plank.addEventListener('click', () => {
    block = "images/acacia_plank.png";
    blockUpdate();
});

const stone_b = document.querySelector("#stone_b");
stone_b.addEventListener('click', () => {
    block = "images/stone_brick.png";
    blockUpdate();
});

const cobble = document.querySelector("#cobble");
cobble.addEventListener('click', () => {
    block = "images/cobble.png";
    blockUpdate();
});

const sand = document.querySelector("#sand");
sand.addEventListener('click', () => {
    block = "images/sand.png";
    blockUpdate();
});

const red_w = document.querySelector("#red_w");
red_w.addEventListener('click', () => {
    block = "images/red_w.png";
    blockUpdate();
});

const black_w = document.querySelector("#black_w");
black_w.addEventListener('click', () => {
    block = "images/black_w.png";
    blockUpdate();
});

const magenta_w = document.querySelector("#magenta_w");
magenta_w.addEventListener('click', () => {
    block = "images/magenta_w.png";
    blockUpdate();
});

const lime_w = document.querySelector("#lime_w");
lime_w.addEventListener('click', () => {
    block = "images/lime_w.png";
    blockUpdate();
});

const dirt = document.querySelector("#dirt");
dirt.addEventListener('click', () => {
    block = "images/dirt.png";
    blockUpdate();
});

const diamond = document.querySelector("#diamond");
diamond.addEventListener('click', () => {
    block = "images/diamond.png";
    blockUpdate();
});

const gold = document.querySelector("#gold");
gold.addEventListener('click', () => {
    block = "images/gold.png";
    blockUpdate();
});



drawGrid(16);
