import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import GameBoard from './GameBoard'
import UserEntryForm from './UserEntryForm';
import PreviousGuessBank from './PreviousGuessBank';
import wordList from './../data/words'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { create, update } from './../redux/gameSlice'

const App = () => {
  const [userState, setUserState] = useState(0);
  const incorrectGuesses = useSelector((state) => state.game.mistakes)
  const currentPreviousGuess = useSelector((state) => state.game.guessBank)
  const gameBoard = useSelector((state) => state.game.board)
  const currentGameWord = useSelector((state) => state.game.word)
  const dispatch = useDispatch()
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
    dispatch(create(wordList[random()]))
  }
  
  // useEffect(() => { setCurrentGameWord(wordList[random()].split("")) }, [newGameState]);
  // useEffect(() => { setGameBoard(currentGameWord.map(() => "_")) }, [newGameState, currentGameWord]);
  // useEffect(() => { setIncorrectGuesses(6) }, [newGameState])
  // useEffect(() => { setGuessBank([]) }, [newGameState])
  // useEffect(() => { setUserState(0) }, [newGameState])
  // useEffect(() => { winAnalysis() }, [gameBoard, winAnalysis])
  // useEffect(() => { loseAnalysis() }, [incorrectGuesses, loseAnalysis])

  const checkGuessBank = (letter) => {
    if (currentPreviousGuess.includes(letter)) {
      setUserState(3)
    } else {
      setUserState(0)
      updateGuesses(letter)
    }
  }

  const updateGuesses = (letter) => {
    dispatch(update(letter))
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
      />
    </React.Fragment>
  );
}

export default App;
