import type { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "react-hot-toast";
import { defaultMetadata } from "@/utils/seo";

import "@/styles/globals.css";
import RegisterSW from "@/components/layout/RegisterSW";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RegisterSW />
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
