import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import fetchedInformationReducer from "./features/data/dataSlice";
import persistedReducer from "./features/shop/shopSlice";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    fetchedInformation: fetchedInformationReducer,
    shop: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store;
