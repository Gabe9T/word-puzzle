import React from "react";
import { update } from './../redux/gameSlice'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../redux/userSlice";


const UserEntryForm = () => {
    const dispatch = useDispatch()
    const guessBank = useSelector((state) => state.game.guessBank)
    const wordLength = useSelector((state) => state.game.word.length)
    const [entryValue, setEntryValue] = useState("")

    return (
        <React.Fragment>
            <form onSubmit={(e) => {
                e.preventDefault();
                const letter = entryValue.toUpperCase()
                if (guessBank.flat().includes(letter)) {
                    dispatch(changeView(3))
                } else {
                    dispatch(changeView(0))
                    dispatch(update(letter))
                }
                setEntryValue("")
                const input = document.getElementById('guessInput')
                input.focus()
                input.select()
            }}>
                <label>Input Guess:&nbsp;</label><br />
                <input onChange={(e) => {
                    const value = e.target.value.replace(/[^A-Za-z]/ig, '')
                    setEntryValue(value)
                }}
                    value={entryValue}
                    type='text'
                    maxLength={wordLength}
                    id='guessInput'
                ></input>
                <br />
                <button type="submit">Enter Guess</button>
            </form>
        </React.Fragment>
    )
}

export default UserEntryForm;