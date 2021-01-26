let numberOfSquares = 9;
let  colors = generateRandColors(numberOfSquares);
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#color-display');
let displayMessage = document.querySelector('#score-message');
let h1Display = document.querySelector('#h1-display');
let newColorsButton = document.querySelector('#new-colors-button');
let modeButton = document.querySelectorAll('.mode');
let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;
for(let i  =0; i<modeButton.length;i++){
modeButton[i].addEventListener('click', function(){
    modeButton[0].classList.remove('selected');
    modeButton[1].classList.remove('selected');
    modeButton[2].classList.remove('selected');
this.classList.add('selected');
if(this.textContent==='Easy'){
    numberOfSquares = 3;
    easyMode(numberOfSquares);
}else if(this.textContent==='Medium'){
    numberOfSquares= 6;
    mediumMode(numberOfSquares);
}else if (this.textContent==='Hard'){
    numberOfSquares = 9;
    hardMode(numberOfSquares);
}
})
};

function easyMode(){
    newColors();
    displayMessage.textContent = '';
    newColorsButton.textContent = 'Change';
    colors = generateRandColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    for(let i = 0; i<squares.length; i++){
    if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
    squares[i].classList.add('square-border')
    } else{
    squares[i].style.display = 'none';
    }}
    h1Display.style.backgroundColor =  '#ffc475' ;
}

function mediumMode(){
newColors();
displayMessage.textContent = '';
newColorsButton.textContent = 'Change';
colors = generateRandColors(numberOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor
for(let i = 0; i<squares.length; i++){
    if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        squares[i].classList.add('square-border')
        squares[i].style.display = 'block';
    } else{
        squares[i].style.display = 'none';
    }} 
    
    h1Display.style.backgroundColor =  '#ffc475' ;
}

function hardMode(){
    newColors();
    displayMessage.textContent = '';
    newColorsButton.textContent = 'Change';
    pickedColor = pickColor();
colorDisplay.textContent = pickedColor
for(let i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
    squares[i].classList.add('square-border')
} h1Display.style.backgroundColor =  '#ffc475' ;
}

newColorsButton.addEventListener('click', newColors);
 function newColors(){
    if(modeButton.textContent==='Easy'){
        numberOfSquares = 3;
    }else if(modeButton.textContent==='Medium'){
        newColors(numberOfSquares);
    }else if (modeButton.textContent==='Hard'){
        numberOfSquares = 9;
    }
    displayMessage.textContent = '';
    colors = generateRandColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    this.textContent = 'Change';
    newColorsButton.classList.add('button-text');
    for(let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].classList.add('square-border')
    } h1Display.style.backgroundColor =  '#ffc475' ;

 } 
 
 function changeColors(){
    for(let i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = pickedColor; 
        squares[i].classList.add('square-border');
    }
}

function pickColor(){
    let randomColor= Math.floor(Math.random()*colors.length) 
    return colors[randomColor];
};

function generateRandColors(x){
let colorArray = [];
for(let i = 0; i<x; i++){
    colorArray.push(randomColor());
} 
return colorArray;
}

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    if(r==255 && g==255 && b==255){ //highly unlikely
        return "rgb("+100+", "+g+", "+b+")"
    }
    return  "rgb("+r+", "+g+", "+b+")"; 
};



 
for(let i = 0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function(){
        if(this.style.backgroundColor === pickedColor){
            displayMessage.textContent = 'Correct'; 
            changeColors();
            h1Display.style.backgroundColor = pickedColor;
            newColorsButton.textContent = 'Play';
            newColorsButton.classList.add('button-text');

            
        }else{
           this.style.backgroundColor = '#ffc475';
           squares[i].classList.remove('square-border');
        } 
    });
}






















































/* let playerOneScoreDisplay = document.querySelector('#player-1-score');
let playerTwoScoreDisplay = document.querySelector('#player-2-score');
const playerOneScoreButton = document.querySelector('#player-1-button');
const playerTwoScoreButton = document.querySelector('#player-2-button');
const resetButton = document.querySelector('#reset-button');
let userNumberInput = document.querySelector('input');
let maxScore = document.querySelector('#max-score');
let playerOneScore = 0;
let playerTwoScore = 0;
let gameOver = false;
let winningScore = 5;
playerOneScoreButton.addEventListener('click', function(){
    if(!gameOver){
    playerOneScore++;
    if(playerOneScore === winningScore){
        playerOneScoreDisplay.classList.add('win');
        gameOver = true;
    }
    playerOneScoreDisplay.textContent = playerOneScore;
    }
     
})

playerTwoScoreButton.addEventListener('click', function(){
    if(!gameOver){
    playerTwoScore++;
    if(playerTwoScore === winningScore){
        playerTwoScoreDisplay.classList.add('win');
        gameOver = true;
    }
    playerTwoScoreDisplay.textContent = playerTwoScore;
    }  
})
userNumberInput.addEventListener('change', function(){
    maxScore.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})
resetButton.addEventListener('click', reset);
function reset(){
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreDisplay.textContent  = playerOneScore;
    playerTwoScoreDisplay.textContent = playerTwoScore;
    playerOneScoreDisplay.classList.remove('win');
    playerTwoScoreDisplay.classList.remove('win');
    gameOver  = false;
} 

.win{
    color: green;
}

*/



