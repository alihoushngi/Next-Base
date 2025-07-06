import LanguageSwitcher from "@/components/shared/Language/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 sticky top-0 bg-white dark:bg-black">
      <span className="uppercase font-black">Next Base</span>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </nav>
  );
};

export default Navbar;
