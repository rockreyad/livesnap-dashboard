import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ProfileCard from "./components/cards/ProfileCard";
import MainSearchBar from "./components/Searchbars/MainSearchBar";
import Navbar from "./components/Sidebars/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import sidebarList from "./data/sidebarList";
import LicenseListLayout from "./Layout/LicenseListLayout";
import MainLayout from "./Layout/MainLayout";
import UsersLayout from "./Layout/UsersLayout";
import WaitingLayout from "./Layout/WaitingLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./styles/tailwind.css";
import { VscSignOut } from "react-icons/vsc";
import { useEffect, useState } from "react";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
        </Routes>
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

              <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/users" element={<UsersLayout />} />
                <Route path="/license" element={<LicenseListLayout />} />

                <Route path="/waiting" element={<WaitingLayout />} />
              </Routes>
            </section>
            <section className="w-2/12">
              <p>Right Sidebar</p>
            </section>
          </div>
        </>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
