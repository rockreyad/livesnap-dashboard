import React, { useEffect, useState } from "react";
import ProfileCard from "../components/cards/ProfileCard";
import Navbar from "../components/Sidebars/Navbar";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import MainSearchBar from "../components/Searchbars/MainSearchBar";
import sidebarList from "../data/sidebarList";
import MainLayout from "../Layout/MainLayout";
import UsersLayout from "../Layout/UsersLayout";
import LicenseListLayout from "../Layout/LicenseListLayout";
import WaitingLayout from "../Layout/WaitingLayout";
import Login from "./Login";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/common/Button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const [count, setCount] = useState({ number: 1 });
  const increment = () => {
    setCount((oldValue) => ({ ...oldValue, number: oldValue.number + 1 }));
  };

  return (
    <>
      <div class="flex flex-row">
        <section className="w-2/12 shadow-2xl shadow-gray-400 ">
          <div className="h-screen">
            <div className="">
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

            <Route path="/waiting" element={<WaitingLayout />} />
          </Routes>
        </section>
        <section className="w-2/12">
          <p>Right Sidebar</p>
          <button className="border-2 border-red-500 p-3" onClick={increment}>
            {count.number}
          </button>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
