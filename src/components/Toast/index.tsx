import * as ToastRadix from "@radix-ui/react-toast";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

function Toast({ message, duration, onClose, className = "" }: ToastProps) {
  return (
    <ToastRadix.Provider duration={duration} swipeDirection="right">
      <ToastRadix.Root
        className={twMerge(
          "bg-green-700 dark:bg-gray-800 dark:text-green-500 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[swipe=move]:tranwhitevar(--radix-toast-swipe-move-x)] data-[swipe=cancel]:tranwhite data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
          className
        )}
        open={true}
        onOpenChange={onClose}
      >
        <ToastRadix.Title className="[grid-area:_title] mb-[5px] font-medium text-white text-[15px]">
          {message}
        </ToastRadix.Title>
        <ToastRadix.Action
          className="[grid-area:_action]"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="inline-flex items-center justify-center rounded font-medium text-xs text-white px-[10px] leading-[25px] h-[25px] shadow-[inset_0_0_0_1px] hover:shadow-[inset_0_0_0_1px] focus:shadow-[0_0_0_2px]">
            <i className="ri-close-fill"></i>
          </button>
        </ToastRadix.Action>
      </ToastRadix.Root>
      <ToastRadix.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </ToastRadix.Provider>
  );
}

export default Toast;
