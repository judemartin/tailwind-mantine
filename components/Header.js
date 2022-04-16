import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="flex justify-end items-center space-x-2 sticky p-5 z-10 top-0 shadow-lg dark:shadow-black  shadow-zinc-300 bg-indigo-500 dark:bg-pink-500">
      <h1 className="text-3xl text-center text-white dark:text-black">
        Welcome to Your App
      </h1>
      {isDark ? (
        <MoonIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-5 w-5 cursor-pointer text-gray-100 mt-2"
        />
      ) : (
        <SunIcon
          className="h-5 w-5 cursor-pointer text-gray-100 mt-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </header>
  );
}
