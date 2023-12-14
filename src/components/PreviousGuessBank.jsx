import React from "react";
import { useSelector } from "react-redux";

const PreviousGuessBank = (s) => {
    const incorrectGuesses = useSelector((state) => state.game.mistakes)
    const guessBank = useSelector((state) => state.game.guessBank)
    return (
        <React.Fragment>
            <h4>Previous Guesses:</h4>
            <p>
            {guessBank.map((letterArray, i) => {
                if (letterArray[1] === false) {
                    return(
                        <span key={i} className="falseLetter">{letterArray[0].toUpperCase()} </span>
                    )
                } else {
                    return (
                    <span key={i} className="trueLetter">{letterArray[0].toUpperCase()} </span>
                    )
                }
            })}
            </p>
            <h4>Incorrect Guesses Remaining:</h4>
            {incorrectGuesses.toString()}
        </React.Fragment>
    )
}

export default PreviousGuessBank;