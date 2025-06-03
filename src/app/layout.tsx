import type { Metadata } from "next";
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "react-hot-toast";
import { defaultMetadata } from "@/utils/seo";

import "@/styles/globals.css";
import RegisterSW from "@/components/layout/RegisterSW";
import { Suspense } from "react";
import { FiraFont } from "@/app/font";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${FiraFont.className} bg-primary`}>
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
