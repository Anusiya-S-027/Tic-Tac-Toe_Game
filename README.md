# Tic-Tac-Toe_Game
# Create the README content as a string
readme_content = """
Tic Tac Toe Game

A simple, interactive Tic Tac Toe game with two modes:  
- Player vs Player  
- Player vs Computer  

Built using HTML, CSS, and Vanilla JavaScript.

---

Features

- Two game modes:  
  - Player vs Player: Two human players alternate turns.  
  - Player vs Computer: Play against a simple AI that picks moves randomly.

- Scoreboard: Tracks wins for Player X and Player O.

- Turn Indicator: Shows whose turn it is.

- Restart Button: Reset the game board and scores.

- Responsive and clean UI: Dark theme with purple accents, smooth hover effects on cells and buttons.

---

How It Works

HTML

- The game interface consists of a header, mode selection radio buttons, scoreboard, turn status, a 3x3 grid board, and a restart button.

CSS

- Styles the page with a dark purple theme, grid layout for the board, and interactive hover effects.

JavaScript

- Manages game state, user input, and game logic:

  - Game State:  
    Tracks current player (X or O), active board positions, scores, and current mode.

  - Mode Selection:  
    Changing mode resets the game.

  - Move Handling:  
    Clicking a cell places a mark if valid. If Player vs Computer mode, the computer automatically makes a random move after the player.

  - Win Detection:  
    Checks all winning combinations after each move to determine a winner or draw.

  - Score Update:  
    Increments and displays scores when a player wins.

  - Restart:  
    Clears the board and resets turn indicator without resetting scores.

---

Project Structure

/tic-tac-toe
├── index.html       # HTML markup for UI
├── style.css        # CSS styles for layout and design
└── script.js        # JavaScript game mechanics and AI logic

---

Usage Instructions

1. Open index.html in any modern browser.
2. Choose your mode — Player vs Player or Player vs Computer.
3. Click on the empty squares to place your mark.
4. Watch the scoreboard update after each win.
5. Use the Restart Game button to start fresh.

---

Technologies Used

- HTML5
- CSS3 (Grid, transitions, hover effects)
- JavaScript (DOM manipulation, event handling)

---

License

This project is free and open source.

---

If you want, I can help you package this with enhancements or add new features!
"""

# Save to a .txt file
file_path = "/mnt/data/TicTacToe_README.txt"
with open(file_path, "w") as f:
    f.write(readme_content)

file_path
