import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import nowPlayingMovies from "./slices/nowPlayingMovies";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const pReducer = combineReducers({
    userSlice: userSlice,
});
const persistedReducer = persistReducer(persistConfig, pReducer);
const store = configureStore({
    reducer: { persistedReducer, nowPlayingMovies: nowPlayingMovies },
});
export default store;
