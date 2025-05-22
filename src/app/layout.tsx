import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";

export const metadata: Metadata = {
  title: "Next Base",
  description:
    "a powerful and developer-friendly boilerplate to jump start your Next.js projects with everything already configured — just clone and start building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
