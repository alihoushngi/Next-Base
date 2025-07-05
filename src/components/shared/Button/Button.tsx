import { IButtonProps } from "@/components/shared/Button/ButtonTypes";
import clsx from "clsx";
import Link from "next/link";

const Button = (props: IButtonProps) => {
  const { children, ariaLabel, href, link, type, className, target, onClick } =
    props;

  const baseClass =
    "py-1 rounded-3xl w-fit transition-all duration-300 border-blue-50 bg-white border-2 hover:border-blue-300 hover:bg-gray-50 dark:hover:bg-black dark:hover:text-white dark:border-gray-500 dark:bg-gray-800";

  const finalClass = clsx(baseClass, className);

  if (link && href) {
    return (
      <Link
        className={finalClass}
        href={href}
        aria-label={ariaLabel}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={finalClass}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
