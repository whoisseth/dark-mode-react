/** @format */
"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";
import React from "react";

type Props = {};

export default function ToggleThemeBtn({}: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  function toggleTheme() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    }
    if (resolvedTheme === "light") {
      setTheme("dark");
    }
  }

  return (
    <button
      className="flex h-5 w-10 items-center rounded-full p-1 bg-slate-900 dark:bg-white"
      onClick={toggleTheme}
    >
      <div
        className={clsx(
          "h-4 w-4 rounded-full bg-white transition-all dark:bg-slate-900",
          {
            "translate-x-full": resolvedTheme === "light"
          },
          {
            "translate-x-0": resolvedTheme === "dark"
          }
        )}
      />
    </button>
  );
}
