import React from "react";

interface ButtonPropTypes {
  label: string;
  onClick: () => void;
  customClasses?: string;
  children?: React.ReactNode;
  variant?: "full" | "outlined"; // New prop to switch between full and outlined versions
}

const Button = ({
  label,
  onClick,
  customClasses = "",
  children,
  variant = "full", // Default is the full button
}: ButtonPropTypes) => {
  const buttonStyles =
    variant === "outlined"
      ? "bg-primary bg-opacity-10 text-primary border border-primary hover:bg-opacity-20"
      : "bg-primary text-white hover:bg-opacity-90";

  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 rounded-[5px] px-10 py-3.5 text-center font-medium lg:px-8 xl:px-10 ${buttonStyles} ${customClasses}`}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
