import React from "react";
import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import ClickOutside from "@/components/ClickOutside";
import UpFade from "@/components/Animations/UpFade";

interface PopUpCardProps {
  children: React.ReactNode;
  onClose: () => void;
}

const PopUpCard: React.FC<PopUpCardProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60 px-4">
      <ClickOutside onClick={onClose}>
        <UpFade>
          <div className="relative z-[10000] mx-auto w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark sm:max-w-3xl">
            <MdOutlineClose
              onClick={onClose}
              className="absolute right-2 top-2 size-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-white"
            />
            {children}
          </div>
        </UpFade>
      </ClickOutside>
    </div>,
    document.body,
  );
};

export default PopUpCard;
