import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
    pageView: 0,
    gameHistory: [],
    score: 0
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeView: (state, action) => {
            state.pageView = action.payload;
        },
        addHistory: (state, action) => {
            state.gameHistory.push(action.payload)
        },
        addScore: (state, action) => {
            state.score = state.score + action.payload
        }
    }
})

export const { changeView, addHistory, addScore } = userSlice.actions
export default userSlice.reducer
