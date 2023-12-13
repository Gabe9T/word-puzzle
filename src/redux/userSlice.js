import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    pageView: 0,
    gameHistory: []
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
        }
    }
})

export const { changeView, addHistory } = userSlice.actions
export default userSlice.reducer