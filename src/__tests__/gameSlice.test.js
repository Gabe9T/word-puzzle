import gameSlice, { initialState, update, create } from "../redux/gameSlice";

describe('gameSlice', () => {
    const testInitialState = {
        word: ['H', 'E', 'L', 'L', 'O'],
        board: ['_', '_', '_', '_', '_'],
        guessBank: [],
        mistakes: 6,
        gameWon: null
    }
    const testAlmostWon = {
        word: ['H', 'E', 'L', 'L', 'O'],
        board: ['H', 'E', '_', '_', 'O'],
        guessBank: [],
        mistakes: 6,
        gameWon: null
    }
    const testAlmostLost = {
        word: ['H', 'E', 'L', 'L', 'O'],
        board: ['H', 'E', '_', '_', 'O'],
        guessBank: [],
        mistakes: 1,
        gameWon: null
    }
    const actionCreate = {
        type: create,
        payload: 'hello'
    }

    const actionCorrect = {
        type: update,
        payload: 'L'
    }
    const actionFalse = {
        type: update,
        payload: 'A'
    }

    test('Initial state should be corresponding to initial state', () => {
        const gameSliceInitialState = gameSlice(initialState, { type: null })
        expect(gameSliceInitialState).toEqual(initialState)
    })

    test('Update reducer should apply changes for a correct letter', () => {
        const testedGameSlice = gameSlice(testInitialState, actionCorrect)
        expect(testedGameSlice).toEqual({
            word: ['H', 'E', 'L', 'L', 'O'],
            board: ['_', '_', 'L', 'L', '_'],
            guessBank: [['L', true]],
            mistakes: 6,
            gameWon: null
        })
    })
    test('Update reducer should apply changes for an incorrect letter', () => {
        const testedGameSlice = gameSlice(testInitialState, actionFalse)
        expect(testedGameSlice).toEqual({
            word: ['H', 'E', 'L', 'L', 'O'],
            board: ['_', '_', '_', '_', '_'],
            guessBank: [['A', false]],
            mistakes: 5,
            gameWon: null
        })
    })

    test('Update when winning letter is put in', () => {
        const testedGameSlice = gameSlice(testAlmostWon, actionCorrect)
        expect(testedGameSlice).toEqual({
            word: ['H', 'E', 'L', 'L', 'O'],
            board: ['H', 'E', 'L', 'L', 'O'],
            guessBank: [['L', true]],
            mistakes: 6,
            gameWon: true
        })
    })

    test('Update when a losing letter is put in', () => {
        const testedGameSlice = gameSlice(testAlmostLost, actionFalse)
        expect(testedGameSlice).toEqual({
            word: ['H', 'E', 'L', 'L', 'O'],
            board: ['H', 'E', '_', '_', 'O'],
            guessBank: [['A', false]],
            mistakes: 0,
            gameWon: false
        })
    })

    test('Create a new gameboard', ()=> {
        const testedGameSlice = gameSlice(initialState, actionCreate)
        expect(testedGameSlice).toEqual(testInitialState)
    })
})