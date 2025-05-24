import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/store/slice/counter/counterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage as default storage

// Configuration object for redux-persist
const persistConfig = {
  key: "root", // Key for the persisted data in storage
  storage, // Storage engine (localStorage in this case)
  whitelist: ["counter"], // Only persist the 'counter' slice
};

// Combine all your reducers into one rootReducer
const rootReducer = combineReducers({
  counter: counterReducer, // Add more reducers here if needed
});

// Enhance the rootReducer with persistence capabilities
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions for serializability check warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor which will be used to persist the store
const persistor = persistStore(store);

// Export store and persistor for usage in the app
export { store, persistor };

// Type definitions for use in the app (especially with TypeScript + Redux hooks)
export type RootState = ReturnType<typeof store.getState>; // Gets the type of the entire Redux state
export type AppDispatch = typeof store.dispatch; // Gets the type of dispatch function
