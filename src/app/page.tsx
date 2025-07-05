import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import LandingPage from "@/components/ui/LandingPage/LandingPage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f5f7ff] text-black dark:bg-zinc-900 dark:text-white w-full">
      <nav className="w-full flex justify-between items-center px-6 py-4 sticky top-0 bg-white dark:bg-black">
        <span className="uppercase font-black">Next Base</span>
        <ThemeSwitcher />
      </nav>
      <div className="min-h-[calc(100vh-70px)] py-4">
        <LandingPage />
      </div>
      <footer className="bg-white dark:bg-black w-full px-6 py-12">
        <div className="max-w-[950px] m-auto flex justify-between items-center">
          <div className="w-1/2 flex flex-col gap-5">
            <h4 className="font-bold text-2xl">Hi, I’m Ali Hooshangi 👋</h4>
            <p className="font-light text-base text-justify">
              Frontend Developer with 6+ years of experience in building
              scalable web applications using React, Next.js, and modern tools.
              Passionate about clean architecture, performance, and great user
              experiences.
            </p>
            <div className="flex w-full justify-between items-center">
              <Link href="mailto:aliihooshangi@gmail.com"></Link>
              <Link href="https://www.linkedin.com/in/alihoushangi"></Link>
              <Link href="https://github.com/alihoushngi"></Link>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </footer>
    </div>
  );
}
