import { ReduxProvider } from "@/store/provider";
import { defaultMetadata } from "@/utils/seo";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { FiraFont } from "@/app/font";
import RegisterSW from "@/components/layout/RegisterSW";
import "@/styles/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${FiraFont.className}`}>
      <body>
        <RegisterSW />
        <Suspense fallback={null}>
          <ReduxProvider>{children}</ReduxProvider>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
