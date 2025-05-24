import type { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

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
      <body>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
