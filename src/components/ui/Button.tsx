import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "link";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  icon?: boolean;
  className?: string;
};

type ButtonProps =
  | (BaseProps & { href: string })
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
<circle cx="15" cy="15" r="15" fill="white"></circle>
<path d="M19.75 11C19.75 10.5858 19.4142 10.25 19 10.25L12.25 10.25C11.8358 10.25 11.5 10.5858 11.5 11C11.5 11.4142 11.8358 11.75 12.25 11.75H18.25V17.75C18.25 18.1642 18.5858 18.5 19 18.5C19.4142 18.5 19.75 18.1642 19.75 17.75L19.75 11ZM11 19L11.5303 19.5303L19.5303 11.5303L19 11L18.4697 10.4697L10.4697 18.4697L11 19Z" fill="#0CC1FA"></path>
</svg>
);

export default function Button({
  children,
  variant = "primary",
  icon = false,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex w-fit items-center justify-center gap-3 whitespace-nowrap font-gotham font-medium transition-colors duration-200";

  const variants: Record<Variant, string> = {
    primary:
      "rounded-full bg-accent pl-[20px] pr-[8px] py-[10px] text-[13px] pl-[20px] md:text-[16px] text-white hover:bg-accent/90",
    link: "text-white underline decoration-2 decoration-white/60 underline-offset-2 hover:text-accent pl-4 md:pl-0 text-[13px] md:text-[16px]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}