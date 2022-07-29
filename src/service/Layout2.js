import React from "react";
import { Outlet } from "react-router-dom";

const Layout2 = () => {
  return (
    <div className="md:flex md:min-h h-screen">
        <div className="md:w-1/4 bg-blue-900 px-5 py-10">
      <h1>Productos</h1>
      </div>
      <div className="md:w-3/4 p-10 md: h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout2;
