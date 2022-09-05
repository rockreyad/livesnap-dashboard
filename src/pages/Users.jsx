import React from "react";

import { VscSignOut } from "react-icons/vsc";
import ProfileCard from "../components/cards/ProfileCard";
import MainSearchBar from "../components/Searchbars/MainSearchBar";
import Navbar from "../components/Sidebars/Navbar";
import sidebarList from "../data/sidebarList";
import UsersLayout from "../Layout/UsersLayout";
import { useEffect, useState } from "react";
import { StartFirebase } from "../service/firebase.config";
import users from "../data/users";
import { getDatabase, ref, child, get } from "firebase/database";

const Users = () => {
  const copyUser = users;
  const [ausers, setUsers] = useState([]);
  const userId = "08q4DrJ3z8eh2Se1C8tjCUWIWUC3";
  useEffect(() => {
    const dbRef = ref(getDatabase());
    var usrD = [];
    get(child(dbRef, `Users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          var dataArray = Object.values(data);
          console.log(dataArray);
          setUsers(dataArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
          <UsersLayout users={ausers} />
        </section>
        <section className="w-2/12">
          <p>Right Sidebar</p>
        </section>
      </div>
    </>
  );
};

export default Users;
