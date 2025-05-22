import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReduxProvider } from "@/store/provider";

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
      </body>
    </html>
  );
}
