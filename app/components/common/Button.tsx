import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-[48px] items-center justify-center rounded-full bg-[#ff5a05] px-8 text-[16px] font-bold text-white transition duration-200 hover:bg-[#ff6b1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a05] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
