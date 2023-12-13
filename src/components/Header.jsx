import React, { useState } from "react";
import { create } from "../redux/gameSlice";
import { useDispatch } from "react-redux";
import { changeView } from "../redux/userSlice";
import wordList from "../data/words";
import  "./css/Header.css";

const random = (max) => {
    return Math.floor(Math.random() * max)
}

const Header = () => {
    const [difficulty, setDifficulty] = useState(4)
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <div className="header">
                <h1>Really Mean Word Guessing Game</h1>
                <div className="wordLength">
                <label  for="difficulty">Word Length: {difficulty}</label>
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
        </React.Fragment >
    )
}

export default Header;