import React from "react";
import PropTypes from  'prop-types'

const PreviousGuessBank = (props) => {
    return (
        <React.Fragment>
            <h4>Previous Guesses:</h4>
            {props.currentPreviousGuess.join(", ").toUpperCase()}
            <h4>Incorrect Guesses Remaining:</h4>
            {props.incorrectGuesses.toString()}
        </React.Fragment>
    )
}

PreviousGuessBank.propTypes = {
    currentPreviousGuess: PropTypes.string,
    incorrectGuesses: PropTypes.number
}

export default PreviousGuessBank;