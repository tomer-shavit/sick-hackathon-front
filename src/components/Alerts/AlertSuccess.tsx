import React from "react";
import { FiHelpCircle } from "react-icons/fi";

interface AlerInfoPros {
  title: string;
  body: string;
}
const AlertInfo: React.FC<AlerInfoPros> = ({ title, body }) => {
  return (
    <>
      <div className="flex w-full items-center  rounded-[10px] border-2 border-blue-200 bg-blue-50 px-4 py-2 dark:bg-[#1B1B24] dark:bg-opacity-30">
        <div className="mr-5.5 mt-[5px] flex h-10 w-full max-w-10 items-center justify-center rounded-md bg-blue-300">
          <FiHelpCircle className="text-white" size={24} />
        </div>
        <div className="w-full">
          <h5 className="mb-2 font-bold leading-[22px] text-[#004434] dark:text-[#34D399]">
            {title}
          </h5>
          <p className="text-[#637381]">{body}</p>
        </div>
      </div>
    </>
  );
};

export default AlertInfo;
