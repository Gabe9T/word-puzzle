import React from "react"
import { useSelector } from "react-redux"

const GameBoard = () => {
    const gameBoard = useSelector((state) => state.game.board)
    return (
        <React.Fragment>
            <h2>{gameBoard.join(" ").toUpperCase()}</h2>
        </React.Fragment>
    )
}

export default GameBoard