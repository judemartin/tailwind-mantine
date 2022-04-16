import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="flex justify-end items-center space-x-2 mr-2">
      <h1 className="text-3xl text-indigo-500 dark:text-pink-500">
        Welcome to Your App
      </h1>
      {isDark ? (
        <MoonIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-5 w-5 cursor-pointer text-gray-100"
        />
      ) : (
        <SunIcon
          className="h-5 w-5 cursor-pointer text-gray-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </header>
  );
}
