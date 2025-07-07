// PLACEHOLDER_REDUX_IMPORT
import { defaultMetadata } from "@/utils/seo";
import type { Metadata } from "next";
// PLACEHOLDER_TOASTER_IMPORT

import { FiraFont, VazirFont } from "@/app/font";
import RegisterSW from "@/components/layout/RegisterSW";
// PLACEHOLDER_I18N_IMPORT

import "@/styles/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${FiraFont.variable} ${VazirFont.variable} font-fa`}
    >
      <body>
        <RegisterSW />
        <Suspense fallback={null}>
          {/* PLACEHOLDER_REDUX_PROVIDER_START */}
          {/* PLACEHOLDER_I18N_PROVIDER_START */}
          {children}
          {/* PLACEHOLDER_I18N_PROVIDER_END */}
          {/* PLACEHOLDER_REDUX_PROVIDER_END */}
        </Suspense>
        {/* PLACEHOLDER_TOASTER */}
      </body>
    </html>
  );
}
