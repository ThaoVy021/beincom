import React, { ButtonHTMLAttributes } from "react";
import "./index.scss";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...rest } = props;

  return (
    <div>
      <button
        className={`items-center justify-center cursor-pointer py-2 px-4 whitespace-nowrap font-medium ${className}`}
        {...rest}
      >
        <span className="flex items-center justify-center gap-x-2 sm:text-xs md:text-sm">
          {children}
        </span>
      </button>
    </div>
  );
}
