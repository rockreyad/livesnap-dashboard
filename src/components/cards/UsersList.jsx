import React, { useState, Fragment, useRef } from "react";

import { MdBrightness1 } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { CgUserlane } from "react-icons/cg";
import { Dialog, Transition } from "@headlessui/react";

const handleAction = () => {};

const UsersList = ({
  name,
  username,
  photo,
  packageName,
  manager,
  activated,
  address,
  deviceId,
  deviceName,
  license,
  phone,
  loginDeviceId,
  userId,
  email,
}) => {
  const [showProfile, setShowProfile] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <div>
      {showProfile ? (
        <Transition.Root show={showProfile} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            onClose={setShowProfile}
          >
            <div
              className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
           sm:p-0"
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
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div
                  className="inline-block align-bottom bg-white rounded-lg
                 text-left 
              overflow-hidden shadow-xl 
              transform transition-all 
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {name}
                    </Dialog.Title>
                  </div>
                  <div className="bg-white flex flex-col font-Nunito p-2 space-y-1">
                    <p className="text-gray-500 font-normal">
                      Address:
                      <span className="mx-2 font-semibold text-black">
                        {address}
                      </span>
                    </p>
                    <p className="text-gray-500 font-normal">
                      Device Id:
                      <span className="mx-2 font-semibold text-black">
                        {deviceId}
                      </span>
                    </p>
                    <p className="text-gray-500 font-normal">
                      Device Name:
                      <span className="mx-2 font-semibold text-black">
                        {deviceName}
                      </span>
                    </p>
                    <p className="text-gray-500 font-normal">
                      Login Device Id:
                      <span className="mx-2 font-semibold text-black">
                        {loginDeviceId}
                      </span>
                    </p>
                    <p className="text-gray-500 font-normal">
                      License:
                      <span className="mx-2 font-semibold text-black">
                        {license}
                      </span>
                    </p>
                    <p className="text-gray-500 font-normal">
                      Phone:
                      <span className="mx-2 font-semibold text-black">
                        {phone}
                      </span>
                    </p>

                    <p className="text-gray-500 font-normal">
                      User Id:
                      <span className="mx-2 font-semibold text-black">
                        {userId}
                      </span>
                    </p>
                    <p className="text-gray-500 font-normal">
                      Email:
                      <span className="mx-2 font-semibold text-black">
                        {email}
                      </span>
                    </p>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md
                     border border-transparent shadow-sm px-4 py-2 bg-red-600
                      text-base font-medium text-white hover:bg-red-700 
                      focus:outline-none focus:ring-2 focus:ring-offset-2
                       focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setShowProfile(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center
                    rounded-md border border-gray-300 shadow-sm px-4 py-2
                     bg-white text-base font-medium text-gray-700
                      hover:bg-gray-50 focus:outline-none focus:ring-2
                       focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                        sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setShowProfile(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      ) : (
        <div className="pr-2">
          <div
            className={`bg-white ${
              packageName === "Unlimited"
                ? "bg-gradient-to-r from-rose-700 to-pink-600"
                : "bg-white  hover:bg-slate-200"
            } rounded-lg px-4 py-6 font-Nunito hover:drop-shadow-md w-full`}
          >
            <div className="flex justify-between items-center">
              <MdBrightness1
                className={`${
                  activated === "true" || packageName === "Unlimited"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              />
              <BsThreeDots className="text-gray-400" onClick={handleAction} />
            </div>
            <div className="flex flex-col items-center space-y-2 mt-4">
              <img
                src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg?w=826"
                className="w-8 rounded-full"
                alt=""
              />
              <div className="">
                <p
                  className={`${
                    packageName === "Unlimited"
                      ? "text-white font-semibold"
                      : ""
                  }text-base font-Nunito`}
                >
                  {name}
                </p>
                <h6
                  className={`text-xs text-gray-500 ${
                    packageName === "Unlimited" ? "dark:text-gray-300" : ""
                  }  flex items-center justify-end `}
                >
                  <CgUserlane className="mr-0.5 text-rose-300" />
                  {username}
                </h6>
              </div>
            </div>
            <div
              className={`flex flex-row justify-evenly mt-4 text-sm ${
                packageName === "Unlimited"
                  ? "dark:text-gray-400"
                  : "text-gray-500"
              }`}
            >
              <div className="flex flex-row items-center">
                <FiPackage className="text-indigo-500 text-xs" />
                <h1 className="ml-1 text-xs"> {packageName}</h1>
              </div>
              <div className="flex flex-row items-center">
                <FiPackage className="text-indigo-500 text-xs" />
                <h1 className="ml-2 text-xs"> {manager}</h1>
              </div>
            </div>

            <div className="flex justify-center items-center mt-10">
              <button
                className={`py-1.5 w-3/4 rounded-lg drop-shadow-md  text-gray-600 ${
                  packageName === "Unlimited"
                    ? " hover:bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-500"
                    : "hover:bg-gradient-to-r from-rose-700 to-pink-600"
                }  hover:text-white  hover:font-semibold bg-white text-xs`}
                onClick={() => setShowProfile(true)}
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
