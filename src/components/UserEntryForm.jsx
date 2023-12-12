import React from "react";
import PropTypes from 'prop-types'

const UserEntryForm = (props) => {
    return (
        <React.Fragment>
            <label>Input Guess</label>
            <input type='text' id='guessInput'></input>
            <button onClick={() => props.updateGuesses(document.getElementById("guessInput").value)}> Enter Guess</button>
        </React.Fragment>
    )
}

UserEntryForm.propTypes = {
    updateGuesses: PropTypes.func.isRequired
}
export default UserEntryForm;