import React, { ReactElement } from "react";

interface Props {
  btnText: string;
  className?: string;
  isLoading?: boolean;
  type?: any;
}

function Button({
  btnText,
  className,
  isLoading = false,
  type = "submit",
}: Props): ReactElement {
  return (
    <div>
      <button
        type={type}
        className={`flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-full shadow-sm bg-[#F05123] hover:bg-[#e44a1f] md:mx-auto  lg:mx-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e44a1f] ${className}`}
      >
        <div
          className={`${
            isLoading
              ? "w-4 h-4 mr-4 animate-spin rounded-full border-2 border-dashed border-white"
              : ""
          }`}
        ></div>
        <p className="">{btnText}</p>
      </button>
    </div>
  );
}

export default Button;
