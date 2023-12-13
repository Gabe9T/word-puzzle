import React from "react";
import PropTypes from 'prop-types'

const UserEntryForm = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.updateGuesses(document.getElementById("guessInput").value.toLowerCase())
                document.getElementById("guessInput").value = ""}}>
            <label>Input Guess:&nbsp;</label><br/>
            <input type='text' maxLength="1" id='guessInput'></input>
            <br/>
            <button type="submit">Enter Guess</button>
            </form>
        </React.Fragment>
    )
}

UserEntryForm.propTypes = {
    updateGuesses: PropTypes.func.isRequired
}
export default UserEntryForm;