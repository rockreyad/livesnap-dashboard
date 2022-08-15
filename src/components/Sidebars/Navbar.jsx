import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Navbar({ routes }) {
  const links = routes.map(({ name, path, icon }) => (
    <Link key={name} to={path}>
      <div className="text-gray-800 text-lg  hover:text-orange-500 flex justify-start items-center align-middle space-x-4 px-16 py-5 w-full">
        <p className="text-rose-600">{icon}</p>
        <h1 className="font-semibold font-Nunito">{name}</h1>
      </div>
    </Link>
  ));
  return <div className="flex flex-col">{links}</div>;
}

export default Navbar;
