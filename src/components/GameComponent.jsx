import React from "react";
import GameBoard from "./GameBoard";
import UserEntryForm from "./UserEntryForm";
import PreviousGuessBank from "./PreviousGuessBank";
import { useSelector } from "react-redux";
import './css/gameComponent.css'

const GameComponent = () => {
    const userState = useSelector((state) => state.user.pageView)
    const word = useSelector((state) => state.game.word)
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
    return(
        <div className="gameComponent">
            <GameBoard />
            {userStateItem(userState)}
            <UserEntryForm />
            <PreviousGuessBank />
        </div>
    );
}

export default GameComponent