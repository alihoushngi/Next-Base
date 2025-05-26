"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.location.protocol.startsWith("http")
    ) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          if (process.env.NODE_ENV === "development") {
            console.log("✅ Service worker registered:", reg);
          }
        })
        .catch((err) => {
          if (process.env.NODE_ENV === "development") {
            console.error("❌ Service worker registration failed:", err);
          }
        });
    }
  }, []);

  return null;
}
