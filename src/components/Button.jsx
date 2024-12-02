import { cva } from "class-variance-authority";
import { Children } from "react";

const button = cva(
  "h-[56px] rounded-[4px]  px-[48px] py-[16px] font-poppins text-center text-font-lg-500 ",
  {
    variants: {
      intent: {
        primary: [
          "bg-color-button-2",
          "text-white",
          "border-transparent",
          "text-color-text-1",
          "hover:bg-color-button-hover",
        ],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: [
          "border",
          "text-black",
          "border-gray-400",
          "hover:text-color-text-2",
        ],
        third: [
          "bg-color-button-2",
          "text-white",
          "py-[10px]",
          "text-color-text-1",
          "hover:bg-color-button-hover",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "medium",
        class: "uppercase",
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  },
);

function Button({ intent, textBTN }) {
  return <button className={button({ intent })}>{textBTN}</button>;
}

export default Button;
