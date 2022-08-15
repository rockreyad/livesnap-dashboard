import React from "react";
import ProfileCard from "../components/cards/ProfileCard";
import Navbar from "../components/Sidebars/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import sidebarList from "../components/Sidebars/sidebarList";
import MainSearchBar from "../components/Searchbars/MainSearchBar";

const Dashboard = () => {
  return (
    <div class="flex flex-row">
      <section className="w-2/12">
        <div className="h-screen">
          <div className="h-2/5">
            <ProfileCard />
          </div>
          <div className="mt-4 w-full">
            <Router>
              <Navbar routes={sidebarList} />
            </Router>
          </div>
        </div>
      </section>
      <section className="w-8/12 bg-orange-50 px-10 py-5">
        <MainSearchBar />
        <div className="bg-white rounded-3xl px-10 py-10 mt-5">
          <p>Medical Test</p>
          <h1 className="py-2 text-4xl">The annual check is comming Soon</h1>
        </div>
      </section>
      <section className="w-2/12">Right Sidebar</section>
    </div>
  );
};

export default Dashboard;
