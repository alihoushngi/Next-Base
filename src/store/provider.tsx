"use client"; // Marks this file as a Client Component in Next.js app directory

import { persistor, store } from "@/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Wraps the app with Redux store and persistence functionality
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
