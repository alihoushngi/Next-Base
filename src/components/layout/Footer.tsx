import Button from "@/components/shared/Button/Button";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black w-full">
      <div className="max-w-[950px] m-auto flex flex-col gap-10 justify-between items-center px-6 py-12">
        <div className="w-full flex flex-col gap-5">
          <h4 className="font-bold text-2xl">Hi, I’m Ali Hooshangi 👋</h4>
          <p className="font-light text-base text-justify">
            Frontend Developer with 6+ years of experience in building scalable
            web applications using React, Next.js, and modern tools. Passionate
            about clean architecture, performance, and great user experiences.
          </p>
          <div className="flex w-full justify-start items-start text-xl gap-2">
            <Button link href="mailto:aliihooshangi@gmail.com" className="px-2">
              <SiGmail />
            </Button>
            <Button
              link
              href="https://www.linkedin.com/in/alihoushangi"
              className="px-2"
            >
              <FaLinkedinIn />
            </Button>
            <Button link href="https://github.com/alihoushngi" className="px-2">
              <TbBrandGithubFilled />
            </Button>
          </div>
        </div>
        <div className="w-full px-6 py-12 dark:bg-gray-800 bg-slate-50 rounded-xl">
          <p>
            Like the project? Star it on GitHub and start building faster with
            Next Base.
          </p>
          <q>Skip setup. Start building. ⚡</q>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
