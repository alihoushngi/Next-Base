export interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  link?: boolean;
  href?: string;
  ariaLabel?: string;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  copy?: boolean;
  copyText?: string;
}
