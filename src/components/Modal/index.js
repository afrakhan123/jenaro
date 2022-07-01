import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = (props) => {
  const {
    children,
    title = "",
    isOpen = false,
    setIsOpen,
    onOk,
    onCancel,
    okText = "Save",
    cancelText = "Cancel",
    okButtonProps = {},
  } = props;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start ">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          {title}
                        </h3>
                        <div className="mt-2 text-sm">{children}</div>
                      </div>
                    </div>
                  </div>
                  {(typeof onOk === "function" ||
                    typeof onCancel === "function") && (
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      {typeof onOk === "function" && (
                        <button
                          type="button"
                          {...okButtonProps}
                          onClick={onOk}
                          className={`${
                            okButtonProps.disabled
                              ? "cursor-not-allowed bg-secondary-400"
                              : ""
                          } w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary-700 text-base font-medium text-white hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 sm:ml-3 sm:w-auto sm:text-sm`}
                        >
                          {okText}
                        </button>
                      )}
                      {typeof onCancel === "function" && (
                        <button
                          type="button"
                          onClick={onCancel}
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          {cancelText}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
