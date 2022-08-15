import React from "react";

import { MdBrightness1 } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { CgUserlane } from "react-icons/cg";

const handleAction = () => {};

const UsersList = ({
  name,
  username,
  photo,
  packageName,
  manager,
  activated,
}) => {
  return (
    <div className="pr-2">
      <div
        className={`bg-white ${
          packageName === "Unlimited"
            ? "bg-indigo-600"
            : "bg-white  hover:bg-slate-200"
        } rounded-lg px-4 py-6 font-Nunito hover:drop-shadow-md w-full`}
      >
        <div className="flex justify-between items-center">
          <MdBrightness1
            className={`${
              activated === "true" ? "text-green-400" : "text-red-400"
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
                packageName === "Unlimited" ? "text-white font-semibold" : ""
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
            packageName === "Unlimited" ? "dark:text-gray-400" : "text-gray-500"
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
          <button className="py-1.5 w-3/4 rounded-lg drop-shadow-md  text-gray-600 hover:bg-gradient-to-r from-rose-700 to-pink-600 hover:text-white  hover:font-semibold bg-white text-xs">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
