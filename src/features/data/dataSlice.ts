import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";

const initialState = {
    data: ""
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        receiveData(state, action: PayloadAction<string>) {
            state.data = action.payload
        }
    }
})

export function getInformation() {
    return async function(dispatch: AppDispatch) {
    const receiveData = fetch("/data.json")
        .then((response) => response.json())
        .catch((error) => console.log(error));
        
        dispatch({type: "data/access", payload: receiveData})
    } 
}

// export const { receiveData } = dataSlice.actions;
export default dataSlice.reducer;