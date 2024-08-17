const container = document.querySelector('#container');
const options = document.querySelector('#options');
const numberButton = document.createElement('button'); 
const clearButton = document.createElement('button');
const eraseButton = document.createElement('button');

// Create grid squares
for (let i = 0; i < 256; i++){ 
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare);

    gridSquare.addEventListener('mouseenter', ()=>{ 
        gridSquare.style.backgroundColor = getRandomColor();
    });
}

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
eraseButton.textContent = 'Erase';
numberButton.textContent = 'Resize';
clearButton.textContent = 'Clear';

options.appendChild(numberButton);
options.appendChild(clearButton);
options.appendChild(eraseButton);

function getRandomColor(){ 
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}