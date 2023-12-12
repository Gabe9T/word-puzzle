import React from "react";
import PropTypes from  'prop-types'

const PreviousGuessBank = (props) => {
    return (
        <React.Fragment>
            <h4>Previous Guesses:</h4>
            <p>
            {props.currentPreviousGuess.map((letter, i) => {
                if (props.gameHistory[i] === false) {
                    return(
                        <span key={i} className="falseLetter">{letter.toUpperCase()} </span>
                    )
                } else {
                    return (
                    <span key={i} className="trueLetter">{letter.toUpperCase()} </span>
                    )
                }
            })}
            </p>
            <h4>Incorrect Guesses Remaining:</h4>
            {props.incorrectGuesses.toString()}
        </React.Fragment>
    )
}

PreviousGuessBank.propTypes = {
    currentPreviousGuess: PropTypes.array,
    gameHistory: PropTypes.array,
    incorrectGuesses: PropTypes.number
}

export default PreviousGuessBank;