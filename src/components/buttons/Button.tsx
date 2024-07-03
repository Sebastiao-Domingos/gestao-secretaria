import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import React from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button
      ref={ref}
      className={twMerge(
        "p-2 rounded bg-purple-300 hover:bg-purple-300/50 active:bg-purple-300/70",
        props.className
      )}
    >
      {props.children}
    </button>
  )
);

Button.displayName = "Button";
