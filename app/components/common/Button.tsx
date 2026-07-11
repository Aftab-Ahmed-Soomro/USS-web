import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-[38px] sm:h-[42px] md:h-[48px] items-center justify-center rounded-full bg-[#ff5a05] px-5 sm:px-6 md:px-8 text-[13px] sm:text-[14px] md:text-[16px] font-bold text-white transition duration-200 hover:bg-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a05] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
