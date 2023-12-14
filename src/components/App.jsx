import React, { useEffect, useCallback } from 'react';
import Header from './Header';
import GameBoard from './GameBoard'
import UserEntryForm from './UserEntryForm';
import PreviousGuessBank from './PreviousGuessBank';
import GameHistory from './GameHistory';
import './css/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeView, addHistory, addScore } from '../redux/userSlice';

const App = () => {
  const userState = useSelector((state) => state.user.pageView)
  const incorrectGuesses = useSelector((state) => state.game.mistakes)
  const guessBank = useSelector((state) => state.game.guessBank)
  const gameBoard = useSelector((state) => state.game.board)
  const word = useSelector((state) => state.game.word)
  const gameWon = useSelector((state) => state.game.gameWon)
  const dispatch = useDispatch()
  const updateGameHistory = useCallback((num) => {
    dispatch(changeView(num))
    return () => {
      const score = Math.round(((
        incorrectGuesses * 
        (word.length + guessBank.length)) 
        * 1000)/3.1459)
      dispatch(addHistory({
        board: gameBoard.join(" ").toUpperCase(),
        guessBank: guessBank,
        word: word.join(" ").toUpperCase(),
        gameWon: gameWon,
        mistakes: incorrectGuesses,
        score: score
      }))
      dispatch(addScore(score))
    }
  }, [gameBoard, guessBank, word, gameWon, incorrectGuesses, dispatch])

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
        <p>You Lose! The word was {word}!</p>
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
      <PreviousGuessBank/>
      <GameHistory />
    </React.Fragment>
  );
}

export default App;
