import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { changeView } from "../redux/userSlice";
import { create } from "../redux/gameSlice"
import wordList from "../data/words";

const random = (max) => {
    return Math.floor(Math.random() * max)
}

const GameBoard = () => {
    const gameBoard = useSelector((state) => state.game.board)
    const [difficulty, setDifficulty] = useState(5)
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <div>
                <div className="wordLength">
                    <label htmlFor="difficulty">Word Length: {difficulty}</label>
                    <input id="difficulty" type="range" value={difficulty} min="5" max="25"
                        onChange={(e) => setDifficulty(e.target.value)}
                    ></input>
                </div>
                <button onClick={() => {
                    const value = parseInt(difficulty)
                    const filtered = wordList.filter((word) => word.length === value)
                    dispatch(create(filtered[random(filtered.length)]))
                    dispatch(changeView(0))
                }}>New Game!</button>
            </div>
            <h2>{gameBoard.join(" ").toUpperCase()}</h2>
        </React.Fragment>
    )
}

export default GameBoard