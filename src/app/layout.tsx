import type { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "react-hot-toast";
import { defaultMetadata } from "@/utils/seo";

import "@/styles/globals.css";

export const metadata: Metadata = defaultMetadata;

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
