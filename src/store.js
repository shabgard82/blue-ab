import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cardSlice from "./redux/slice/card-slice";
import maliSlice from "./redux/slice/mali-slice";
import transactionSlice from "./redux/slice/transaction-slice";
import activeCardSlice from "./redux/slice/active-card-slice";

const rootReducer = combineReducers({
  cardSlice: cardSlice,
  maliSlice: maliSlice,
  transactionSlice: transactionSlice,
  activeCardSlice: activeCardSlice,
});



const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
