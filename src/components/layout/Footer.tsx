"use client";

import Button from "@/components/shared/Button/Button";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const isFa = i18n.language === "fa";

  return (
    <footer className="bg-white dark:bg-black w-full">
      <div className="max-w-[950px] m-auto flex flex-col gap-10 justify-between items-center px-6 py-12">
        <div className="w-full flex flex-col gap-5">
          <h4
            className={`font-bold text-2xl ${isFa ? "text-right" : "text-left"}`}
          >
            {t("greeting")}
          </h4>
          <p className={`font-light text-base ${isFa ? "text-justify" : ""}`}>
            {t("description")}
          </p>
          <div className="flex w-full justify-start items-start text-xl gap-2">
            <Button
              link
              href="mailto:aliihooshangi@gmail.com"
              className="px-2"
              aria-label="Email"
            >
              <SiGmail />
            </Button>
            <Button
              link
              href="https://www.linkedin.com/in/alihoushangi"
              className="px-2"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Button>
            <Button
              link
              href="https://github.com/alihoushngi"
              className="px-2"
              aria-label="GitHub"
            >
              <TbBrandGithubFilled />
            </Button>
          </div>
        </div>
        <div
          className={`w-full px-6 py-12 rounded-xl dark:bg-gray-800 bg-slate-50 ${isFa ? "text-right" : "text-left"}`}
        >
          <p>{t("cta")}</p>
          <q>{t("quote")}</q>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
