
import { useSelector } from "react-redux"
import React from "react"
import './css/GameHistory.css'

const GameHistory = () => {
    const gameHistory = useSelector((state) => state.user.gameHistory)
    return (
        < React.Fragment >
        {gameHistory.map((game, i) => {
            return (
                <div className={game.gameWon ? "gameHistoryGame won" : "gameHistoryGame lost"} key={i}>
                    <h4>{game.board}</h4>
                    <h4>{game.word}</h4>
                    <h5>Guesses: {game.guessBank.map((arr) => arr[0].toUpperCase() + ",")}</h5>
                    <p>Mistakes Remaining: {game.mistakes}</p>
                    <p><b>{game.gameWon ? "Won" : "Lost"}</b></p>
                    <h4>Points: {game.score}</h4>
                </div>
            )
        })}
        </React.Fragment >
    )
}

export default GameHistory