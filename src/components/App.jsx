import React, { useEffect, useState} from 'react';
import Header from './Header';
import GameBoard from './GameBoard'
import UserEntryForm from './UserEntryForm';
import PreviousGuessBank from './PreviousGuessBank';
import './App.css';

const App = () => {
  const [currentGameWord, setCurrentGameWord] = useState()
  const [gameBoard, setGameBoard] = useState()
  const [currentUserGuess, setCurrentUserGuess] = useState()
  const [currentPreviousGuess, previousGuessBank] = useState([])
  const [incorrectGuesses, setIncorrectGuesses] = useState(6)
  
  const updateGuesses = (letter) => {
    setCurrentUserGuess(letter)
    setIncorrectGuesses(incorrectGuesses - 1)
    previousGuessBank([...currentPreviousGuess, letter])
  }

  return (
    <React.Fragment>
      <Header />
      <GameBoard
        gameBoard={gameBoard}
        />
      <UserEntryForm 
        updateGuesses={updateGuesses}/>
      <PreviousGuessBank 
        currentPreviousGuess={currentPreviousGuess}
        incorrectGuesses={incorrectGuesses}
        />
    </React.Fragment>
  );
}

export default App;
