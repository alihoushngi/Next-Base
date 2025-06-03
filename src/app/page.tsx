import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white text-black dark:bg-zinc-900 dark:text-white">
      <h1 className="">Next Base</h1>
      <ThemeSwitcher />
    </div>
  );
}
