import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
    showCart: false,
    amounts: {} as Record<string, number>,
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        cartShow(state) {
            state.showCart = !state.showCart;
        },
        increaseAmount(state, action: PayloadAction<string>) {
            if (!state.amounts.hasOwnProperty(action.payload)) {
                state.amounts[action.payload] = 0;
            } else {
                state.amounts[action.payload] += 1;
            }
            console.log(JSON.stringify(state.amounts, null, 2));
        },
        decreaseAmount(state, action: PayloadAction<string>) {
            if (state.amounts[action.payload] > 0) {
                state.amounts[action.payload] -= 1;
            }
        }
    }
})

const persistConfig = {
    key: "shop",
    storage,
    whitelist: ["amounts"], 
};

const persistedReducer = persistReducer(persistConfig, shopSlice.reducer);

export default persistedReducer;

export const { cartShow, increaseAmount, decreaseAmount } = shopSlice.actions