let flippedCards = 0
let firstSelection = null;
let secondSelection = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let matches = 0;
let chronometer = false;
let timer = 51;
let initialTimer = 50;
let countDown = null;



let showMoves = document.getElementById('moves');
let showTime = document.getElementById('time');
let showMatches = document.getElementById('matches');
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
numbers = numbers.sort(() => {return Math.random() -0.5});

function init(){
    clearInterval(countDown);
    timer = 51
    countDown = setInterval(() => {
        timer --;
        showTime.innerHTML = `Time: ${timer} seconds`;
        if (timer === 0){
            clearInterval(countDown);
            showTime.innerHTML = `Game Over!!`;
            // init();
            //}
             render();
        }
    },1000);
}
for(let i=0; i<=17; i++){
    let  renderCards = document.getElementById(i);
    renderCards.addEventListener("click",()=> flip(i))
}
function render() {
    for(let i=0; i<=17; i++){
        let  renderCards = document.getElementById(i);
         console.log(renderCards);
        renderCards.innerHTML = `<img src="./img/${numbers[i]}.png" >`;
        renderCards.disabled = true;
        renderCards.addEventListener("click",()=> flip(i))
    }
}

function flip(id){
    if(chronometer === false){
        init();
        chronometer = true;
    }
    flippedCards++;   moves++;
    showMoves.innerHTML = `Moves: ${moves}`;
    if(flippedCards === 1){
        firstSelection = document.getElementById(id);
        firstResult = numbers[id];
        firstSelection.innerHTML = `<img src="img/${firstResult}.png" alt="Card Image">`;
        firstSelection.disabled = true;
    }else if(flippedCards === 2){
        secondSelection = document.getElementById(id);
        secondResult = numbers[id];
        secondSelection.innerHTML = `<img src="img/${secondResult}.png">`;
        secondSelection.disabled = true;
      

        if(firstResult === secondResult){
            flippedCards = 0;
            matches++;
            showMatches.innerHTML = `Matches: ${matches}`;

            if(matches === 9){
                clearInterval(countDown);
                showMatches.innerHTML = `Matches: ${matches} `;
                showMoves.innerHTML = `Moves: ${moves}`;
                showTime.innerHTML = `Contratulations! You did it...`;
            }
        }else{
            setTimeout(() =>{
                firstSelection.innerHTML ='';
                secondSelection.innerHTML ='';
                firstSelection.disabled = false;
                secondSelection.disabled = false;
                flippedCards = 0;

            },700)
            
        }
    }
}

function restartGame(){
    clearInterval(countDown);
    matches = 0;
    moves = 0;
    showMatches.innerHTML = `Matches: ${matches}`;
    showMoves.innerHTML = `Moves: ${moves}`;
    console.log("clicked");

    for (let i=0; i<=17; i++){
        let renderCards = document.getElementById(i);
        renderCards.innerHTML = '';
    }
    init();
    renderCards();
    flip(id);
    moves = 0;
}
const restartButton = document.getElementById('restart');
if (restartButton) {
    restartButton.addEventListener('click', restartGame);
}

