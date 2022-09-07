import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardTiles from "../components/cards/DashboardTiles";
import OverviewCard from "../components/cards/OverviewCard";
import packages from "../data/packages";

const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token-info")) {
      console.log("A");
    } else {
      console.log("Send to Login page");
      navigate("/sign-in");
    }
    return () => {};
  }, [localStorage.getItem("token-info")]);
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-rose-400 py-10 px-10 w-full rounded-2xl mt-5">
        <div className="flex flex-col text-white">
          <h1 className="font-mono text-4xl">
            Good Morning,
            <span className="ml-1 font-mono font-semibold">Reyad</span>{" "}
          </h1>
          <p className="mt-2 font-thin text-xl">
            Either you run the day or the day runs you
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-5 font-light text-lg">Overview</h1>
        <OverviewCard />
      </div>
      <div className="flex space-x-5 mt-5">
        {packages.map(({ name, total, subscribe, expired, color }) => (
          <DashboardTiles
            name={name}
            total={total}
            subscribe={subscribe}
            expired={expired}
            color={color}
          />
        ))}
      </div>
    </>
  );
};

export default MainLayout;
