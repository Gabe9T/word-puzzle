
import { addHistory, addScore, changeView, initialState } from "../redux/userSlice";
import userSlice from "../redux/userSlice";



describe('userSlice', () => {

    const actionPageView = {
        type: changeView,
        payload: 2
    }

    const gameHistory = {
        type: addHistory,
        payload: { 0: "Hello" }
    }

    const scoreChange = {
        type: addScore,
        payload: 5
    }

    test('Inital states should be the same', () => {
        const UserSliceInitalState = userSlice(initialState, { type: null })
        expect(UserSliceInitalState).toEqual(initialState)
    })

    test('Update changeView when recieving a number', () => {
        const changeViewInitialState = userSlice(initialState, actionPageView)
        expect(changeViewInitialState).toEqual({...initialState, pageView: 2})
    })

    test('Update gameHistory array when recieving a payload', () => {
        const historyChangeState = userSlice(initialState, gameHistory)
        expect(historyChangeState).toEqual({...initialState, gameHistory: [{ 0: "Hello" }]})
    })

    test('Add score when recieving a score action', () => {
        const scoreChangeState = userSlice(initialState, scoreChange)
        expect(scoreChangeState).toEqual({...initialState, score: 5})
    })

})

