"use client";

import i18n from "@/i18n/client";
import { I18nextProvider } from "react-i18next";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
