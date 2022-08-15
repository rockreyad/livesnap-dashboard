import * as React from "react";
import ProfileCard from "../components/cards/ProfileCard";
import Navbar from "../components/Sidebars/Navbar";

import { Routes, Route } from "react-router-dom";
import MainSearchBar from "../components/Searchbars/MainSearchBar";
import sidebarList from "../data/sidebarList";
import MainLayout from "../Layout/MainLayout";
import UsersLayout from "../Layout/UsersLayout";
import LicenseListLayout from "../Layout/LicenseListLayout";

const Dashboard = () => {
  return (
    <div class="flex flex-row">
      <section className="w-2/12 shadow-2xl shadow-gray-400">
        <div className="h-screen">
          <div className="h-2/5">
            <ProfileCard />
          </div>
          <div className="mt-4 w-full">
            <Navbar links={sidebarList} />
          </div>
        </div>
      </section>
      <section className="w-8/12 bg-orange-200 bg-opacity-10 px-10 py-5">
        <MainSearchBar />

        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/users" element={<UsersLayout />} />
          <Route path="/license" element={<LicenseListLayout />} />
        </Routes>
      </section>
      <section className="w-2/12">Right Sidebar</section>
    </div>
  );
};

export default Dashboard;
