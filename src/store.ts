import { configureStore } from "@reduxjs/toolkit";
import fetchedInformationReducer from "./features/data/dataSlice";
import shopReducer from "./features/shop/shopSlice";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        fetchedInformation: fetchedInformationReducer,
        shop: shopReducer
    }
})


export default store