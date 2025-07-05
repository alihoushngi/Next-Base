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
    <div className="flex items-center gap-2 text-sm font-medium">
      <button
        onClick={() => setTheme("light")}
        className={`pl-3 pr-5 py-1 rounded-3xl transition-all duration-300 ${theme === "light" ? "border-blue-50 bg-white border-2 hover:border-blue-300 hover:bg-gray-50" : "hover:bg-white hover:text-black"}`}
      >
        ☀️ Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`pl-3 pr-5 py-1 rounded-3xl transition-all duration-300 ${theme === "dark" ? "border-gray-500 bg-gray-800 border-2 hover:bg-black hover:text-white" : "hover:border-blue-300 hover:bg-gray-50 border-2 border-transparent"}`}
      >
        🌙 Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`pl-3 pr-5 py-1 rounded-3xl transition-all duration-300 ${theme === "system" ? "border-blue-800 text-white bg-blue-800 border-2" : "hover:bg-blue-800 hover:text-white"}`}
      >
        💻 System
      </button>
    </div>
  );
};
