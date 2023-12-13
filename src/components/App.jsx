import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import GameBoard from './GameBoard'
import UserEntryForm from './UserEntryForm';
import PreviousGuessBank from './PreviousGuessBank';
import wordList from './../data/words'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { create, update } from './../redux/gameSlice'
import { changeView, addHistory } from '../redux/userSlice';

const App = () => {
  const userState = useSelector((state) => state.user.pageView)
  const incorrectGuesses = useSelector((state) => state.game.mistakes)
  const currentPreviousGuess = useSelector((state) => state.game.guessBank)
  const gameBoard = useSelector((state) => state.game.board)
  const currentGameWord = useSelector((state) => state.game.word)
  const gameWon = useSelector((state) => state.game.gameWon)
  const dispatch = useDispatch()

  const updateGameHistory = () => {
    dispatch(addHistory({
      board: gameBoard,
      guessBank: currentPreviousGuess,
      word: currentGameWord.join(""),
      gameWon: gameWon,
      mistakes: incorrectGuesses,
    }))
  }

  if (gameWon === true) {
    dispatch(changeView(2))
    updateGameHistory()
  } else if (gameWon === false) {
    dispatch(changeView(1))
    updateGameHistory()
  }

  const random = () => {
    return Math.floor(Math.random() * wordList.length)
  }

  const newGame = () => {
    dispatch(create(wordList[random()]))
    dispatch(changeView(0))
  }

  const checkGuessBank = (letter) => {
    if (currentPreviousGuess.flat().includes(letter)) {
      dispatch(changeView(3))
    } else {
      dispatch(changeView(0))
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
