# Word-Puzzle

A React web application written in JavaScript & made using create-react-app

By Henry Oberholtzer & Gabriel Tucker

## Technologies Used

*   React
*   JavaScript
*   Redux
*   Webpack

## Description

### User Stories
*   Game presents blank spaces according to the length of the word.
*   User can enter a single letter guess
*   If the user's guess is present in the word, the blank spaces change to reveal the letter.
*   If the user's guess is incorrect, the total guesses remaining goes down by one.
*   With each guess, the guess is added to a bank of previous guesses.
*   All guesses are checked against the bank of previous guesses to make sure guesses are not redundant.
*   If all spaces in the word are revealed and the remaining incorrect guesses is >0 the user will recieve a win message.
*   If the word is not revealed and the user hits zero incorrect  guesses remaining, the user will recieve a losing message.



### Component Tree

```md
App
├── Header
│   │   - Title of Game
├── GameBoard
│    - Shows the current status of the game as blank spaces
│    - Shows incorrect guesses remaining
├── UserEntryForm
│   - Allows user to enter a guess
├── Previous Guesses
│   │   - Displays all guesses by the user
```
## Setup/Installation Requirements

* Download the repository using `git clone <URL>` in terminal or downloading the ZIP folder from github
* Run `npm install` in the root folder
* To view the application on a dev server, run `npm start`

## Known Bugs

*   Input takes non A-Z inputs still
*   Colors of correct and incorrect letters are not set

## License

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) & Gabriel Tucker (c) 2023
