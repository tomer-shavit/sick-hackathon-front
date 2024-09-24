import React from "react";

interface ButtonPropTypes {
  label: string;
  onClick: () => void;
  customClasses?: string;
  children?: React.ReactNode;
}

const Button = ({
  label,
  onClick,
  customClasses,
  children,
}: ButtonPropTypes) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 rounded-[5px] bg-primary px-10 py-3.5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 ${customClasses}`}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
