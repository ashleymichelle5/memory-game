# 🧠 Inside Out Memory Game

A fun and challenging memory card game themed around Pixar's Inside Out. Test your memory skills by matching 9 pairs of emotion-filled cards before time runs out!

![Screenshot](/img/Screenshot%20.png)

## 🎮 [Play the Game](https://ashleymichelle5.github.io/memory-game/) | 📂 [View Code](https://github.com/ashleymichelle5/memory-game)

## 📖 About The Project

This interactive memory game challenges players to match 9 pairs of Inside Out-themed cards within a 50-second time limit. Flip cards, remember their positions, and race against the clock to find all the matches!

### ✨ Features

- ⏱️ **50-second countdown timer** - Beat the clock to win
- 🎴 **9 pairs of cards** - 18 cards total to match
- 🔄 **Shuffle mechanism** - Cards randomize on each game
- 📊 **Move counter** - Track your efficiency
- 🎨 **Inside Out theme** - Beautiful character-based design
- 🔁 **Restart functionality** - Play again instantly

---

## 🚀 How to Play

1. Click on any card to flip it over and reveal the image
2. Click on a second card to try and find its match
3. If the cards match, they stay face up
4. If they don't match, they flip back over
5. Remember the positions and find all 9 pairs before time runs out!
6. **Win condition:** Match all pairs within 50 seconds
7. **Lose condition:** Time runs out before all pairs are matched

---

## 🛠️ Technologies Used

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- **JavaScript** - Game logic and interactivity
- **HTML5** - Structure and content
- **CSS3** - Styling and animations

---

## 🎯 Game Logic Overview

### Key Variables
```javascript
let numbers = []           // Array to store card values
let firstSelection = null  // First card selected
let secondSelection = null // Second card selected
let moves = 0             // Number of moves made
let matches = 0           // Number of successful matches
let timer = 50            // Countdown timer (seconds)
```

### Core Functions
- `shuffleNumbers()` - Randomizes card positions
- `init()` - Initializes the game state
- `revealAllCards()` - Shows all cards temporarily
- `setUpCards()` - Generates and displays cards on the board
- `disableAllCards()` - Prevents clicking during card comparison
- `flip()` - Handles card flip logic and matching
- `restartGame()` - Resets the game to initial state

---

## 👨‍💻 Author

**Ashley Sanchez**

- GitHub: [@ashleymichelle5](https://github.com/ashleymichelle5)
- LinkedIn: [Ashley Sanchez](https://linkedin.com/in/your-profile)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

---

## 🙏 Acknowledgments

- Inside Out characters and theme © Disney/Pixar
- Inspired by classic memory card games
- Built as part of my JavaScript learning journey




