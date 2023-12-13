import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";

const UserEntryForm = (props) => {
    const [entryValue, setEntryValue] = useState("")

    return (
        <React.Fragment>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.updateGuesses(entryValue.toLowerCase())
                document.getElementById("guessInput").value = ""}}>
            <label>Input Guess:&nbsp;</label><br/>
            <input onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z]/ig, '')
                setEntryValue(value)
            }}
            value={entryValue}
            type='text'  
            maxLength="1" 
            id='guessInput'
            ></input>
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