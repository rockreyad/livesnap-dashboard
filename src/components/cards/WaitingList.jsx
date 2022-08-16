import React from "react";
import { RiCopperCoinLine } from "react-icons/ri";

const WaitingList = ({
  name,
  userName,
  point,
  pack,
  oldSnap,
  snapKit,
  newSnap,
}) => {
  return (
    <>
      <div className="flex flex-col bg-white hover:bg-gray-200 py-2 px-2 rounded-md">
        <div className="flex justify-between items-center space-x-2">
          <p className="text-sm font-Nunito font-bold">{name}</p>
          <div className="flex space-x-1 justify-center items-center  text-xs font-Nunito">
            <div className="flex justify-between items-center bg-slate-400 text-white rounded-xl px-2 py-0.5">
              <RiCopperCoinLine className="mr-1" />
              <h6 className="">{point}</h6>
            </div>
            <h6
              className={`${
                pack === "Unlimited"
                  ? "bg-orange-500 font-semibold"
                  : "bg-indigo-500"
              }  text-white rounded-xl px-2 py-0.5`}
            >
              {pack}
            </h6>
          </div>
        </div>
        <h3 className="text-gray-500 text-sm">{userName}</h3>

        <div className="flex justify-between text-xs mt-4">
          <div className="flex flex-col">
            <p className="text-black font-normal">Old Snap</p>
            <p className="text-red-400 font-bold font-Nunito">{oldSnap}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-black font-normal">Snapkit</p>
            <p className="text-gray-500 font-bold font-Nunito">{snapKit}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-black font-normal">New Snap</p>
            <p className="text-green-400 font-bold font-Nunito">{newSnap}</p>
          </div>
        </div>

        {pack === "Unlimited" ? (
          <div className="flex justify-end  text-sm mt-4">
            <button className="bg-green-400 px-5 py-1 rounded-md text-white font-semibold hover:bg-green-500 uppercase shadow-md">
              Change
            </button>
          </div>
        ) : (
          <div className="flex justify-between text-sm mt-4">
            <button className="bg-rose-400 px-5  py-1 rounded-md text-white font-semibold hover:bg-rose-500 uppercase shadow-md">
              Reject
            </button>
            <button className="bg-green-400 px-5 py-1 rounded-md text-white font-semibold hover:bg-green-500 uppercase shadow-md">
              Change
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WaitingList;
