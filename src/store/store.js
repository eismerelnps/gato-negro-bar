"use client";
import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { persistStore } from "redux-persist";

//app's reducers
import { authReducer } from "@/reducers/authReducer";
import { uiReducer } from "@/reducers/uiReducer";
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "ui"],
};

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)

// export default  () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
