import React from "react";
import PropTypes from  'prop-types'

const PreviousGuessBank = (props) => {
    return (
        <React.Fragment>
            <h4>Previous Guesses:</h4>
            <p>
            {props.currentPreviousGuess.map((letterArray, i) => {
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
            {props.incorrectGuesses.toString()}
        </React.Fragment>
    )
}

PreviousGuessBank.propTypes = {
    currentPreviousGuess: PropTypes.array,
    incorrectGuesses: PropTypes.number
}

export default PreviousGuessBank;