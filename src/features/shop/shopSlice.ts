import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    showCart: false
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        cartShow(state, ) {
            state.showCart = !state.showCart;
        }
    }
})

export default shopSlice.reducer