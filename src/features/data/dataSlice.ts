import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";

const initialState = {
    info: ""
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getInformation(state, action: PayloadAction<any>) {
            state.info = action.payload
        }
    }
})

export function fetchInformation() {
    return async function(dispatch: AppDispatch) {
        try {
            const response = await fetch("./data.json")
            const data = response.json();
            dispatch(getInformation(await data));
        } catch(error) {
            console.log(error)
        }
    } 
}

export const { getInformation } = dataSlice.actions;
export default dataSlice.reducer;