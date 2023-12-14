import React, { useEffect, useCallback } from 'react';
import Header from './Header';
import GameBoard from './GameBoard'
import UserEntryForm from './UserEntryForm';
import PreviousGuessBank from './PreviousGuessBank';
import GameHistory from './GameHistory';
import './css/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeView, addHistory } from '../redux/userSlice';

const App = () => {
  const userState = useSelector((state) => state.user.pageView)
  const incorrectGuesses = useSelector((state) => state.game.mistakes)
  const currentPreviousGuess = useSelector((state) => state.game.guessBank)
  const gameBoard = useSelector((state) => state.game.board)
  const currentGameWord = useSelector((state) => state.game.word)
  const gameWon = useSelector((state) => state.game.gameWon)
  const dispatch = useDispatch()
  const updateGameHistory = useCallback((num) => {
    dispatch(changeView(num))
    return () => {
      dispatch(addHistory({
        board: gameBoard.join(" ").toUpperCase(),
        guessBank: currentPreviousGuess,
        word: currentGameWord.join(" ").toUpperCase(),
        gameWon: gameWon,
        mistakes: incorrectGuesses,
        score: Math.round(((incorrectGuesses * (currentGameWord.length + currentPreviousGuess.length)) * 1000)/3.1459)
      }))
    }
  }, [gameBoard, currentPreviousGuess, currentGameWord, gameWon, incorrectGuesses, dispatch])

  useEffect(() => {
    if (gameWon === true) {
      updateGameHistory(2)()
    } else if (gameWon === false) {
      updateGameHistory(1)()
    }
  }, [gameWon, updateGameHistory])

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
      <Header/>
      <GameBoard/>
      {userStateItem(userState)}
      <UserEntryForm/>
      <PreviousGuessBank
        currentPreviousGuess={currentPreviousGuess}
        incorrectGuesses={incorrectGuesses}
      />
      <GameHistory />
    </React.Fragment>
  );
}

export default App;
