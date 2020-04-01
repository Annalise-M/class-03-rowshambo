# class-03-rowshambo
Rock Paper Scissors
Rock Paper Scissors
===

Build a R-P-S Game, user vs computer. Track win/lose/draw record. 

---

## Steps

### Make a New Repo

Make the repo on github first, then clone it locally and work from there. Call it rock-paper-scissors.

### Make a New Page

- New `index.html` page for the game
- New `app.js` and `main.css` files used by new page

### Design the App

Using HTML and CSS, design the look and feel of the rock, paper, scissors game. At a minimum you will need:

1. Page layout (title, header, footer?, etc.)
1. Explain the rules (paper beats rock, rock beats scissors, scissors beats papers), an HTML List might be a good semantic choice.
1. Radio buttons _with same name for grouping_ for choosing rock, paper, or scissors (images anyone?)
1. Button for "Play" 
1. Display of wins and losses and draws
1. Display of result of each game (can be text and/or images), should indicate what the computer threw and what the result was (win, loss, draw)

### Computer Throw

Create a `getRandomThrow` function in a module which should be called `get-random-throw.js`

This function needs to generate a random numbers and triage that into returning `rock`, `paper`, or `scissors` accordingly.

### TDD `checkResult` Function

Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"

TDD a `checkResult` function that:

1. Has two parameters: `player` and `computer`
1. Returns one of the following values:
    - `draw` - the throws are identical
    - `win` - the player's throw beats the computer throw
    - `lose` - the computer's throw beats the player's throw

Write one test at a time, each test can address one of the nine possible outcomes.

You can assume _valid input_, meaning the passed input will always be a valid throw of `rock`, `paper`, or `scissors`.

### App

The `r-p-s.js` file is imported via a `<script>` tag in `r-p-s.html`.

#### Sections

1. Imports:
    - Your `getRandomThrow` and `checkResults` functions
1. Reference needed DOM elements:
    - The radio buttons with the user's throw choice
        - You can alternatively use `document.querySelector('input:checked')` in your event handler to get 
        the actively checked radio button each time the play button is clicked
    - The button the user will click for playing
    - The element(s) needed to display:
        - throw result (win, lose, or draw)
        - current wins, losses, and draws counts
1. Setup Application State (what will change over time)
   - wins
   - losses
   - draws
1. Add event listener(s):
   - Subscribe to the button's click event using `addEventListener`

### App

Take some time to plan out your logic flow of what should happen once the user makes a choice and clicks the button to play a game.

What are the steps of the process that will need to occur?

Use techniques like drawing a flow diagram, and/or pseudo-coding

## Points Break Down

Looking For | Points (10)
:--|--:
Correct and Idiomatic HTML and CSS | 2 
Get Computer Throw function (no test needed!) | 1
TDD Check Results Function | 2
Overall Correct Game Logic and Flow | 2
Project and code files are: indented / spaced correctly / clean | 2
Clear commit history present | 1
STRETCH: add reset button | + 1
STRETCH: keep track of and display how many times the reset button was hit | +1
