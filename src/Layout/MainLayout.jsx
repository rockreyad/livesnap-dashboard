import React from "react";

import DashboardTiles from "../components/cards/DashboardTiles";
import packages from "../data/packages";

const MainLayout = () => {
  return (
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
  );
};

export default MainLayout;
