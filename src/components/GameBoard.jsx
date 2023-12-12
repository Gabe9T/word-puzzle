import React from "react"
import PropTypes from 'prop-types'

const GameBoard = (props) => {
    return (
        <React.Fragment>
            <h2>{props.gameBoard.join(" ")}</h2>
        </React.Fragment>
    )
}

GameBoard.propTypes = {
    gameBoard: PropTypes.array
}

export default GameBoard