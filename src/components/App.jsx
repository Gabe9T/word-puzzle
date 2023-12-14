import React, { useEffect, useCallback } from 'react';
import Header from './Header';
import GameComponent from './GameComponent';
import GameHistory from './GameHistory';
import './css/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeView, addHistory, addScore } from '../redux/userSlice';


const App = () => {
  const incorrectGuesses = useSelector((state) => state.game.mistakes)
  const guessBank = useSelector((state) => state.game.guessBank)
  const gameBoard = useSelector((state) => state.game.board)
  const word = useSelector((state) => state.game.word)
  const gameWon = useSelector((state) => state.game.gameWon)
  const dispatch = useDispatch()
  const updateGameHistory = useCallback((num) => {
    dispatch(changeView(num))
    return () => {
      let score = Math.round(((
        incorrectGuesses * 
        (word.length + guessBank.length)) 
        * 1000)/3.1459)
      if (guessBank.length === word.length) {
        score = score + 1000000
      } else if (guessBank.length <= word.length + word.length / 4) {
        score = score + 5000
      } else if (guessBank.length <= word.length + word.length / 2) {
        score = score + 2500
      }
      dispatch(addHistory({
        board: gameBoard.join(" ").toUpperCase(),
        guessBank: guessBank,
        word: word.join(" ").toUpperCase(),
        gameWon: gameWon,
        mistakes: incorrectGuesses,
        score: score,
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
    console.log()
  }, [gameWon, updateGameHistory])

  return (
    <React.Fragment>
      <Header />
      <div className="gameArea">
        <GameComponent />
        <GameHistory />
      </div>
    </React.Fragment>
  );
}

export default App;
