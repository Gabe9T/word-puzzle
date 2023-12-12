import React from "react"
import PropTypes from 'prop-types'

const GameBoard = (props) => {
    return (
        <React.Fragment>
            <h2>{props.gameBoard}</h2>
            <p>Incorrect Guesses Remaining: 6</p>
        </React.Fragment>
    )
}

GameBoard.propTypes = {
    gameBoard: PropTypes.string
}

export default GameBoard