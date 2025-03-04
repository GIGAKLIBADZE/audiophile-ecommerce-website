import { configureStore } from "@reduxjs/toolkit";
import fetchedInformationReducer from "./features/data/dataSlice"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        fetchedInformation: fetchedInformationReducer,
    }
})


export default store