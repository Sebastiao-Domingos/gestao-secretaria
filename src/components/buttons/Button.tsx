import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ children, className = "", ...others }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "p-2 rounded bg-purple-300 hover:bg-purple-300/50 active:bg-purple-300/70",
        className
      )}
      {...others}
    >
      {children}
    </button>
  );
}
