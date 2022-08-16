import React from "react";
import { FaUsers } from "react-icons/fa";

const OverviewCard = () => {
  return (
    <div className="flex space-x-2 mt-2">
      <div className="flex bg-slate-400 bg-opacity-80 py-4 px-4 rounded-lg w-1/4">
        <div className="flex justify-start items-center  text-white">
          <div className=" bg-slate-100 bg-opacity-30 p-2 rounded-md">
            <FaUsers className="text-4xl" />
          </div>
          <div className="flex flex-col justify-evenly items-start ml-10">
            <p className="text-2xl font-semibold font-mono">656</p>
            <p className="text-xs font-semibold font-Nunito">Users</p>
          </div>
        </div>
      </div>
      <div className="flex bg-indigo-400 bg-opacity-80 py-4 px-4 rounded-lg w-1/4">
        <div className="flex justify-start items-center  text-white">
          <div className=" bg-indigo-300 bg-opacity-40 p-2 rounded-md">
            <FaUsers className="text-4xl" />
          </div>
          <div className="flex flex-col justify-evenly items-start ml-10">
            <p className="text-2xl font-semibold font-mono">371</p>
            <p className="text-xs font-semibold font-Nunito">Subscribed</p>
          </div>
        </div>
      </div>
      <div className="flex bg-cyan-400 bg-opacity-80 py-4 px-4 rounded-lg w-1/4">
        <div className="flex justify-start items-center  text-white">
          <div className=" bg-cyan-300 bg-opacity-40 p-2 rounded-md">
            <FaUsers className="text-4xl" />
          </div>
          <div className="flex flex-col justify-evenly items-start ml-10">
            <p className="text-2xl font-semibold font-mono">83123</p>
            <p className="text-xs font-semibold font-Nunito">Unique Times</p>
          </div>
        </div>
      </div>
      <div className="flex bg-purple-400 bg-opacity-80 py-4 px-4 rounded-lg w-1/4">
        <div className="flex justify-start items-center  text-white">
          <div className=" bg-purple-300 bg-opacity-40 p-2 rounded-md">
            <FaUsers className="text-4xl" />
          </div>
          <div className="flex flex-col justify-evenly items-start ml-10">
            <p className="text-2xl font-semibold font-mono">291002</p>
            <p className="text-xs font-semibold font-Nunito">Active Points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
