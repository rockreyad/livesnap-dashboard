import React from "react";
import UsersList from "../components/cards/UsersList";
import users from "../data/users";

const UsersLayout = () => {
  return (
    <div className="flex flex-wrap justify-start w-fit">
      {users.map(({ fullName, username, pack, snapkitManager, activated }) => (
        <div className="p-2 w-1/5">
          <UsersList
            name={fullName}
            username={username}
            packageName={pack}
            manager={snapkitManager}
            activated={activated}
          />
        </div>
      ))}

      <div className="container mx-auto sm:px-4">
        <nav aria-label="Page navigation">
          <ul className="flex lg:justify-between justify-center">
            <li>
              <button className="h-10 px-5 text-rose-300 transition-colors duration-150 bg-white border border-rose-300 rounded-l-lg focus:shadow-outline hover:bg-indigo-100 flex flex-row justify-between items-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                Prev
              </button>
            </li>
            <li>
              <button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100  flex flex-row justify-between items-center">
                Next
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UsersLayout;
