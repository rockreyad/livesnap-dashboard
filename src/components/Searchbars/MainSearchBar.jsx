import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const MainSearchBar = () => {
  return (
    <div className="px-2 py-4 flex min-w-full items-center">
      <IoSearchOutline className="text-4xl text-gray-700" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search with username, email, license code"
        className="placeholder:text-black  text-3xl outline-none bg-transparent ml-4 font-Nunito font-light w-full"
      />
    </div>
  );
};

export default MainSearchBar;
