const container = document.querySelector('#container');
const options = document.querySelector('#options');
const numberButton = document.createElement('button'); 
const eraseButton = document.createElement('button');

for (let i = 0; i < 256; i++){ 
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare);

    gridSquare.addEventListener('mouseenter', ()=>{ 
        gridSquare.style.backgroundColor = getRandomColor();
    });

    

};

numberButton.classList.add('numberButton');
eraseButton.classList.add('eraseButton');
numberButton.textContent = 'Resize ';
eraseButton.textContent = 'Erase'

options.appendChild(numberButton);
options.appendChild(eraseButton);





function getRandomColor(){ 
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
};






