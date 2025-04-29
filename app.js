let flippedCards = 0;
let firstSelection = null;
let secondSelection = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let matches = 0;
let chronometer = false;
let timer = 50;
let countDown = null;
let numbers = [];

const showMoves = document.getElementById('moves');
const showTime = document.getElementById('time'); 
const showMatches = document.getElementById('matches');
const restartButton = document.getElementById('restart');

function shuffleNumbers() {
    numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
    numbers.sort(() => Math.random() - 0.5);
}

function init() {
    clearInterval(countDown);
    timer = 50;
    countDown = setInterval(() => {
        timer--;
        showTime.innerHTML = `Time: ${timer} seconds`;
        if (timer <= 0) {
            clearInterval(countDown);
            showTime.innerHTML = `Game Over!!`;
            disableAllCards();
            revealAllCards();
        }
    }, 1000);
}

function revealAllCards() {
    for (let i = 0; i <= 17; i++) {
        const card = document.getElementById(i);
        card.innerHTML = `<img src="./img/${numbers[i]}.png" alt="Card Image">`;
        card.disabled = true;
    }
}

function setupCards() {
    for (let i = 0; i <= 17; i++) {
        const card = document.getElementById(i);
        card.innerHTML = '';
        card.disabled = false;

        const newCard = card.cloneNode(true);
        newCard.id = i; 
        card.parentNode.replaceChild(newCard, card);

        newCard.addEventListener('click', () => flip(i));
    }
}

function disableAllCards() {
    for (let i = 0; i <= 17; i++) {
        document.getElementById(i).disabled = true;
    }
}

function flip(id) {
    if (!chronometer) {
        init();
        chronometer = true;
    }

    const card = document.getElementById(id);
    if (card.disabled) return;

    flippedCards++;
    moves++;
    showMoves.innerHTML = `Moves: ${moves}`;

    card.innerHTML = `<img src="./img/${numbers[id]}.png" alt="Card Image">`;
    card.disabled = true;

    if (flippedCards === 1) {
        firstSelection = card;
        firstResult = numbers[id];
    } else if (flippedCards === 2) {
        secondSelection = card;
        secondResult = numbers[id];

        if (firstResult === secondResult) {
            flippedCards = 0;
            matches++;
            showMatches.innerHTML = `Matches: ${matches}`;

            if (matches === 9) {
                clearInterval(countDown);
                showTime.innerHTML = `Congratulations! You did it...`;
            }
        } else {
            setTimeout(() => {
                firstSelection.innerHTML = '';
                secondSelection.innerHTML = '';
                firstSelection.disabled = false;
                secondSelection.disabled = false;
                flippedCards = 0;
            }, 700);
        }
    }
}

function restartGame() {
    clearInterval(countDown);
    flippedCards = 0;
    moves = 0;
    matches = 0;
    chronometer = false;
    timer = 50;

    showMoves.innerHTML = `Moves: ${moves}`;
    showMatches.innerHTML = `Matches: ${matches}`;
    showTime.innerHTML = `Time: ${timer} seconds`;

    shuffleNumbers();
    setupCards();
    
}

restartButton.addEventListener('click', restartGame);

shuffleNumbers();
setupCards();
