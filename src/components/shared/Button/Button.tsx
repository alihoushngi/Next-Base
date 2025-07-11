import { IButtonProps } from "@/components/shared/Button/ButtonTypes";
import clsx from "clsx";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Button = (props: IButtonProps) => {
  const {
    children,
    ariaLabel,
    href,
    link,
    type = "button",
    className,
    target,
    onClick,
    copy = false,
    copyText,
  } = props;

  const [copied, setCopied] = useState(false);

  const baseClass =
    "py-1 rounded-3xl w-fit transition-all duration-300 border-blue-50 bg-white border-2 hover:border-blue-300 hover:bg-gray-50 dark:hover:bg-black dark:hover:text-white dark:border-gray-500 dark:bg-gray-800";

  const finalClass = clsx(baseClass, className);

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (copy) {
        const textToCopy =
          copyText || (typeof children === "string" ? children : "");

        try {
          await navigator.clipboard.writeText(textToCopy);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // بعد از ۲ ثانیه برمی‌گرده به FaCopy
        } catch (err) {
          console.error("Failed to copy!", err);
        }
      }

      if (onClick) {
        onClick(e);
      }
    },
    [copy, copyText, children, onClick],
  );

  const renderContent = () => {
    if (copy) {
      return (
        <span className="flex items-center gap-2">
          {children}
          {copied ? <TiTick className="text-green-500" /> : <FaCopy />}
        </span>
      );
    }
    return children;
  };

  if (link && href) {
    return (
      <Link
        className={finalClass}
        href={href}
        aria-label={ariaLabel}
        target={target}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      className={finalClass}
      type={type}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
