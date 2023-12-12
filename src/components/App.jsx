import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import GameBoard from './GameBoard'
import UserEntryForm from './UserEntryForm';
import PreviousGuessBank from './PreviousGuessBank';
import wordList from './../data/words'
import './App.css';

const App = () => {
  const [currentGameWord, setCurrentGameWord] = useState([])
  const [gameBoard, setGameBoard] = useState("START_NEW_GAME".split(""))
  const [currentPreviousGuess, setGuessBank] = useState([])
  const [incorrectGuesses, setIncorrectGuesses] = useState(6)
  const [userState, setUserState] = useState(0);
  const [newGameState, setNewGame] = useState(false)
  const [gameHistory, setGameHistory] = useState([])
  const winAnalysis = useCallback(() => {
    for (let i = 0; i < currentGameWord.length; i++) {
      if (gameBoard[i] !== currentGameWord[i]) {
        return;
      }
    }
    setUserState(2);
  }, [currentGameWord, gameBoard])
  const loseAnalysis = useCallback(() => {
    if (incorrectGuesses < 1) {
      setUserState(1)
    }
  }, [incorrectGuesses])

  const random = () => {
    return Math.floor(Math.random() * wordList.length)
  }

  const newGame = () => {
    setNewGame(!newGameState);
  }
  
  useEffect(() => { setCurrentGameWord(wordList[random()].split("")) }, [newGameState]);
  useEffect(() => { setGameBoard(currentGameWord.map(() => "_")) }, [newGameState, currentGameWord]);
  useEffect(() => { setIncorrectGuesses(6) }, [newGameState])
  useEffect(() => { setGuessBank([]) }, [newGameState])
  useEffect(() => { setUserState(0) }, [newGameState])
  useEffect(() => { winAnalysis() }, [gameBoard, winAnalysis])
  useEffect(() => { loseAnalysis() }, [incorrectGuesses, loseAnalysis])

  const checkGuessBank = (letter) => {
    if (currentPreviousGuess.includes(letter)) {
      setUserState(3)
    } else {
      setUserState(0)
      updateGuesses(letter)
    }
  }

  const updateGuesses = (letter) => {
    if (currentGameWord.includes(letter)) {
      const newGameBoard = gameBoard
        .map((blank, i) => {
          if (currentGameWord[i] === letter) {
            return currentGameWord[i]
          } else {
            return blank
          }
        })
      setGameBoard(newGameBoard)
      setGuessBank([...currentPreviousGuess, letter])
      setGameHistory([...gameHistory, true])
    } else {
      setIncorrectGuesses(incorrectGuesses - 1)
      setGuessBank([...currentPreviousGuess, letter])
      setGameHistory([...gameHistory, false])
    }
  }

  const userStateItem = (num) => {
    if (num === 0) {
      return (
        <p></p>
      )
    } if (num === 1) {
      return (
        <p>You Lose! The word was {currentGameWord}!</p>
      )
    } if (num === 2) {
      return (
        <p>You Win!</p>
      )
    } if (num === 3) {
      return (
        <p>You Already Guessed This Letter!</p>
      )
    }
  }

  return (
    <React.Fragment>
      <Header
        newGame={newGame}
      />
      <GameBoard
        gameBoard={gameBoard}
      />
      {userStateItem(userState)}
      <UserEntryForm
        updateGuesses={checkGuessBank} />
      <PreviousGuessBank
        currentPreviousGuess={currentPreviousGuess}
        incorrectGuesses={incorrectGuesses}
        gameHistory={gameHistory}
      />
    </React.Fragment>
  );
}

export default App;
