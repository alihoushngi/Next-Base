"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`${theme === "light" ? "font-bold" : ""}`}
      >
        ☀️ Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`${theme === "dark" ? "font-bold" : ""}`}
      >
        🌙 Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`${theme === "system" ? "font-bold" : ""}`}
      >
        💻 System
      </button>
    </div>
  );
};
