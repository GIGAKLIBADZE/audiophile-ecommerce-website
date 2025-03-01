import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/data/dataSlice"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        data: dataReducer,
    }
})

export default store