import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    word: ["T","H","E"],
    board: ["_","_","_"],
    guessBank: [["H", false], ["E", true]],
    mistakes: 6
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        update: (state, action) => {
            if (state.word.includes(action.payload)) {
                const newArray = state.board.map((blank, i) => {
                    if (state.word[i] === action.payload) {
                        return action.payload
                    } else {
                        return blank
                    }
                })
                state.board = newArray;
                state.guessBank.push([ action.payload, true]);
            } else {
                state.guessBank.push([ action.payload, false])
                state.mistakes = state.mistakes - 1;
            }
        },
        create: (state, action) => {
            const array = action.payload.split("")
            state.mistakes = 6
            state.word = array
            state.guessBank = []
            state.board = array.map(() => "_")
        },
    }
})



export const { update, create } = gameSlice.actions
export default gameSlice.reducer