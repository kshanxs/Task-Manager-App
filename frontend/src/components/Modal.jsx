import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-white">
          {/* Modal header (optional, not used in logout dialog) */}
          {/*
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-white border-white">
            <h3 className="text-lg font-medium text-white dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-white bg-transparent hover:bg-white hover:text-black rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-white dark:hover:text-black cursor-pointer"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          */}
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4 text-white">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
