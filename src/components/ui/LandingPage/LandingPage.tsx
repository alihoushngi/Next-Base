"use client";
import Button from "@/components/shared/Button/Button";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t, i18n } = useTranslation("landing");
  const isFa = i18n.language === "fa";

  return (
    <section
      className={`text-black dark:text-blue-50 py-7 flex flex-col gap-12 max-w-[950px] m-auto ${isFa ? "rtl text-right" : "ltr text-left"}`}
    >
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="font-light text-xl text-center">{t("tagline")}</h2>
        <h1 className="font-black text-3xl text-center">{t("title")}</h1>
        <p className="text-center">{t("description")}</p>
      </div>
      <Button
        href="https://github.com/alihoushngi/Next-Base"
        target="_blank"
        aria-label="github link"
        link
        className="m-auto pl-3 pr-5"
      >
        {t("button_github")}
      </Button>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full flex flex-col gap-2 justify-start bg-white dark:bg-black p-4 rounded-ss-xl rounded-se-xl">
          <h3 className="font-bold text-xl">{t("section_1_title")}</h3>
          <p className="font-light text-sm">{t("section_1_text")}</p>
        </div>
        <div className="w-full dark:bg-gray-800 bg-slate-50 rounded-es-xl rounded-ee-xl p-4">
          <ul>
            <li>{t("feature_1")}</li>
            <li>{t("feature_2")}</li>
            <li>{t("feature_3")}</li>
            <li>{t("feature_4")}</li>
            <li>{t("feature_5")}</li>
            <li>{t("feature_6")}</li>
            <li>{t("feature_7")}</li>
            <li>{t("feature_8")}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full flex flex-col gap-1 justify-start">
          <h3 className="font-bold text-xl">{t("section_2_title")}</h3>
          <p className="font-light text-sm">{t("section_2_text")}</p>
        </div>
        <div className="w-full ps-2 pt-2">
          <ul>
            <li>{t("tech_1")}</li>
            <li>{t("tech_2")}</li>
            <li>{t("tech_3")}</li>
            <li>{t("tech_4")}</li>
            <li>{t("tech_5")}</li>
            <li>{t("tech_6")}</li>
            <li>{t("tech_7")}</li>
          </ul>
        </div>
        <q className="mt-4 w-full">{t("section_2_quote")}</q>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full flex flex-col gap-1 justify-start">
          <h3 className="font-bold text-xl">{t("section_3_title")}</h3>
          <p className="font-light text-sm">{t("section_3_text")}</p>
        </div>
        <div className="w-full mt-4 flex justify-start">
          <Button
            href="https://github.com/alihoushngi/Next-Base/tree/main/src"
            target="_blank"
            link
            aria-label="github folders link"
            className="m-auto pl-3 pr-5"
          >
            {t("button_github_folders")}
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full flex flex-col gap-1 justify-start">
          <h3 className="font-bold text-xl">{t("section_4_title")}</h3>
        </div>
        <div className="w-full ps-2 pt-2">
          <ul>
            <li>{t("why_1")}</li>
            <li>{t("why_2")}</li>
            <li>{t("why_3")}</li>
            <li>{t("why_4")}</li>
            <li>{t("why_5")}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full flex flex-col gap-2 justify-start bg-white dark:bg-black p-4 rounded-ss-xl rounded-se-xl">
          <h3 className="font-bold text-xl">{t("section_5_title")}</h3>
        </div>
        <div className="w-full dark:bg-gray-800 bg-slate-50 rounded-es-xl rounded-ee-xl p-4">
          <ul>
            <li>{t("clone_1")}</li>
            <li>{t("clone_2")}</li>
            <li>{t("clone_3")}</li>
            <li>{t("clone_4")}</li>
          </ul>
        </div>
        <q className="mt-4 w-full">{t("section_5_quote")}</q>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full flex flex-col gap-1 justify-start">
          <h3 className="font-bold text-xl">{t("section_6_title")}</h3>
        </div>
        <div className="w-full ps-2 pt-2">
          <ul>
            <li>{t("next_1")}</li>
            <li>{t("next_2")}</li>
            <li>{t("next_3")}</li>
            <li>{t("next_4")}</li>
            <li>{t("next_5")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
