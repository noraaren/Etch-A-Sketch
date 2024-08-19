// Selecting the container and options elements
const container = document.querySelector('#container');
const options = document.querySelector('#options');

// Creating buttons
const title = document.createElement('div');
const rainbowPen = document.createElement('button');
const numberButton = document.createElement('button');
const clearButton = document.createElement('button');
const eraseButton = document.createElement('button');
const inputColorButton = document.createElement('button');
const colorPickerInput = document.createElement('input');

// Set up the color picker input element
colorPickerInput.type = 'color';
colorPickerInput.style.display = 'none'; // Hide the color picker by default

// Create grid squares
function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
    }
}

// Initialize grid with default size
createGrid(16);

// Set up input color functionality
inputColorButton.addEventListener('click', showColorPicker);

colorPickerInput.addEventListener('input', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getCustomColor();
        });
    });
});

// Erase button functionality
eraseButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'white';
        });
    });
});

// Rainbow Pen functionality
rainbowPen.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
});

// Clear button functionality
clearButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

// Resize grid functionality
numberButton.addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter new grid size (e.g., 16 for 16x16 grid):"));
    if (newSize && newSize > 0 && newSize <= 100) { // Limit the size for performance reasons
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Helper functions
function showColorPicker() {
    colorPickerInput.click();
}

function getCustomColor() {
    return colorPickerInput.value;
}

function getRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}

// Add classes and text to buttons
numberButton.classList.add('numberButton');
clearButton.classList.add('clearButton');
eraseButton.classList.add('eraseButton');
inputColorButton.classList.add('inputColorButton');
rainbowPen.classList.add('rainbowPen');
title.classList.add('title');

title.textContent = 'Etch-A-Sketch'
rainbowPen.textContent = 'Rainbow Pen';
eraseButton.textContent = 'Erase';
numberButton.textContent = 'Resize';
clearButton.textContent = 'Clear';
inputColorButton.textContent = 'Pick Color';

// Append buttons to the options container
options.appendChild(title); 
options.appendChild(numberButton);

options.appendChild(inputColorButton);
options.appendChild(rainbowPen);
options.appendChild(colorPickerInput);

options.appendChild(clearButton);
options.appendChild(eraseButton);