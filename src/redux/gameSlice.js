import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    word: [],
    board: ["N","E","W","_","G","A","M","E"],
    guessBank: [],
    mistakes: 6,
    gameWon: null
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
                if (state.mistakes < 1) {
                    state.gameWon = false;
                }
            }
            const checkGame = () => {
                for (let i = 0; i < state.word.length; i++) {
                    if (state.word[i] !== state.board[i]) {
                        return;
                    }
                }
                state.gameWon = true;
            }
            checkGame()
        },
        create: (state, action) => {
            const array = action.payload.split("")
            state.mistakes = 6
            state.word = array
            state.guessBank = []
            state.board = array.map(() => "_")
            state.gameWon = null
        },
    }
})



export const { update, create } = gameSlice.actions
export default gameSlice.reducer