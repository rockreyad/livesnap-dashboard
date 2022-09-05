import React from "react";
import { VscSignOut } from "react-icons/vsc";
import ProfileCard from "../components/cards/ProfileCard";
import MainSearchBar from "../components/Searchbars/MainSearchBar";
import Navbar from "../components/Sidebars/Navbar";
import sidebarList from "../data/sidebarList";
import UsersLayout from "../Layout/UsersLayout";
import WaitingLayout from "../Layout/WaitingLayout";

const WaitingList = () => {
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
          <WaitingLayout />
        </section>
        <section className="w-2/12">
          <p>Right Sidebar</p>
        </section>
      </div>
    </>
  );
};

export default WaitingList;
