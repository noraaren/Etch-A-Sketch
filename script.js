const container = document.querySelector('#container');
const options = document.querySelector('#options');
const numberButton = document.createElement('button'); 
const clearButton = document.createElement('button');
const eraseButton = document.createElement('button');
const inputColorButton = document.createElement('input');
inputColorButton.type = 'color';
inputColorButton.id = 'favcolor'; 
inputColorButton.value = '#ff0000';

// Create grid squares
for (let i = 0; i < 256; i++){ 
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare);

    gridSquare.addEventListener('mouseenter', ()=>{ 
        gridSquare.style.backgroundColor = getRandomColor();
    });
}


inputColorButton.addEventListener('input', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = inputColorButton.value;
        });
    });
});

// Erase button functionality
clearButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.style.backgroundColor = 'white'; 
    });
});

eraseButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'white';
        });
    });
});

numberButton.classList.add('numberButton');
clearButton.classList.add('clearButton');
eraseButton.classList.add('eraseButton'); 
inputColorButton.classList.add('inputColorButton');
eraseButton.textContent = 'Erase';
numberButton.textContent = 'Resize';
clearButton.textContent = 'Clear';

options.appendChild(numberButton);
options.appendChild(clearButton);
options.appendChild(eraseButton);
options.appendChild(inputColorButton);

function getRandomColor(){ 
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}