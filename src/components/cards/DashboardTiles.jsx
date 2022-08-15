import React from "react";

const DashboardTiles = ({ name, total, subscribe, expired, color }) => {
  return (
    <div className="flex flex-col justify-center items-center font-Nunito">
      <div
        style={{ backgroundColor: `${color}` }}
        className={`bg-${color}-400 bg-opacity-10 flex flex-col py-4 rounded-2xl justify-center items-center drop-shadow-xl ${
          name !== "Unlimited" ? "px-8" : "px-16"
        }`}
      >
        <p className={`text-${color}-400 font-semibold text-2xl`}>{total}</p>
        <div className="flex space-x-4 mt-4 text-xl">
          <div className="flex flex-col items-center">
            <h1 className="bg-white rounded-xl px-4 py-2 text-black font-semibold ">
              {subscribe}
            </h1>
            <p className="text-xs mt-2 font-semibold">subscribe</p>
          </div>
          {name !== "Unlimited" && (
            <div className="flex flex-col items-center">
              <h1 className="bg-white rounded-xl px-4 py-2 text-black font-semibold">
                {expired}
              </h1>
              <p className="text-xs mt-2 font-semibold">expired</p>
            </div>
          )}
        </div>
      </div>
      <h3 className="font-semibold mt-2">{name}</h3>
    </div>
  );
};

export default DashboardTiles;
