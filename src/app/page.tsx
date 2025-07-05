import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import LandingPage from "@/components/ui/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className="bg-[#f5f7ff] text-black dark:bg-zinc-900 dark:text-white w-full">
      <nav className="w-full flex justify-between items-center px-6 py-4">
        <span className="uppercase font-black">Next Base</span>
        <ThemeSwitcher />
      </nav>
      <div className="min-h-[calc(100vh-70px)] py-4">
        <LandingPage />
      </div>
    </div>
  );
}
