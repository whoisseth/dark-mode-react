/** @format */

import Image from "next/image";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

export default function Home() {
  return (
    <main className="flex  flex-col gap-4 min-h-screen items-center justify-center w-full">
      <p className=" text-black  dark:text-red-400"> Theme</p>
      <ToggleThemeBtn />
    </main>
  );
}
