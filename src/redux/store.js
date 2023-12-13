import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        game: gameSlice,
        user: userSlice
    },
})