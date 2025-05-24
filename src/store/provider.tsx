"use client"; // Marks this file as a Client Component in Next.js app directory

import { persistor, store } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Wraps the app with Redux store and persistence functionality
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    // Provides Redux store to the application
    <Provider store={store}>
      {/* Delays rendering of the app's UI until the persisted state has been retrieved and saved to Redux */}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
