import React from "react";

import { Link } from "react-router-dom";

function Navbar({ links }) {
  return links.map(({ name, path, icon }, index) => (
    <Link key={index} to={path}>
      <div className="text-gray-800 text-lg  hover:text-orange-500 flex justify-start items-center align-middle space-x-4 px-16 py-5 w-full">
        <p className="text-rose-600">{icon}</p>
        <h1 className="font-semibold font-Nunito">{name}</h1>
      </div>
    </Link>
  ));
}

export default Navbar;
