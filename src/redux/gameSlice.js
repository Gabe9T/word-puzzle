import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
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
            const enterLetter = (letter) => {
                if (state.word.includes(letter)) {
                    const newArray = state.board.map((blank, i) => {
                        if (state.word[i] === letter) {
                            return letter
                        } else {
                            return blank
                        }
                    })
                    state.board = newArray;
                    state.guessBank.push([ letter, true]);
                } else {
                    state.guessBank.push([ letter, false])
                    state.mistakes = state.mistakes - 1;
                    if (state.mistakes < 1) {
                        state.gameWon = false;
                    }
                }
            }
            if(action.payload.trim().length === state.word.length) {
                action.payload.split("").forEach((letter) => enterLetter(letter))
            } else {
                enterLetter(action.payload.trim().charAt(0))
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
            const array = action.payload.toUpperCase().split("")
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