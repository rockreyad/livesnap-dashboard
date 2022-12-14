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
import { VscSignOut } from "react-icons/vsc";

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
        <section className="w-2/12 shadow-2xl shadow-gray-400">
          <div className="h-screen">
            <div className="h-2/5">
              <ProfileCard />
            </div>
            <div className="mt-4 w-full">
              <Navbar links={sidebarList} />
            </div>
            <div className="flex justify-center relative top-32">
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem("token-info");
                }}
                className="flex  justify-center items-center font-semibold w-4/5 h-16 bg-gray-400 text-lg rounded text-white space-x-4 hover:bg-gray-500 hover:drop-shadow-md"
              >
                <VscSignOut />
                <h6>Log Out</h6>
              </button>
            </div>
          </div>
        </section>
        <section className="w-8/12 bg-orange-200 bg-opacity-10 px-10 py-5">
          <MainSearchBar />
          <MainLayout />
        </section>
        <section className="w-2/12">
          <p>Right Sidebar</p>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
