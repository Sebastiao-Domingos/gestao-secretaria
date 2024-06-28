import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {}

export function CloseButton({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-slate-100 rounded-full w-[30px] h-[30px] flex justify-center items-center hover:bg-slate-200 active:bg-slate-200/50",
        props.className
      )}
    >
      <span className="material-icons">close</span>
    </button>
  );
}
