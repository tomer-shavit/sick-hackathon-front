import React from "react";
import { FiHelpCircle } from "react-icons/fi";

interface AlerInfoPros {
  title: string;
  body: string;
}
const AlertInfo: React.FC<AlerInfoPros> = ({ title, body }) => {
  return (
    <>
      <div className="flex w-full items-center  rounded-[10px] border-2 border-blue-200 bg-blue-50 px-4 py-2.5 dark:bg-blue-light-2 dark:bg-opacity-30">
        <div className="mr-5.5 flex h-10 w-full max-w-10 items-center justify-center rounded-md bg-blue-400">
          <FiHelpCircle className="text-white" size={24} />
        </div>
        <div className="w-full">
          <h5 className="text-md mb-1 font-bold leading-[22px] text-blue-400 ">
            {title}
          </h5>
          <p className="text-md dark:text-gray-1">{body}</p>
        </div>
      </div>
    </>
  );
};

export default AlertInfo;
