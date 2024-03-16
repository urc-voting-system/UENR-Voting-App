import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import crown from "../assets/crown.png";
import help from "../assets/help.png";
import records from "../assets/records.png";
import stats from "../assets/stats.png";

import { Link } from "react-router-dom";

const Sidebar = ({ closeSidebar, sidebarStatus }) => {
  return (
    <aside
      id="sidebar"
      className={`md:w-1/3 lg:w-1/5 fixed top-0 left-0 z-10 bg-white p-3 shadow-md md:flex justify-between flex-col ${
        sidebarStatus == "open" ? "flex w-2/3 sm:w-1/3" : "hidden"
      }`}
    >
      <div>
        <div className="flex align-center space-x-2 mb-5 relative">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h5 className="text-xl font-semibold p-5">UENR Voting App</h5>
          <div
            id="closebtn"
            className="absolute top-0 right-0 font-bold cursor-pointer md:hidden"
            onClick={closeSidebar}
          >
            &times;
          </div>
        </div>

        <ul className="mt-10">
          <Link
            to={"/"}
            className="hover:bg-gray-200 rounded-md my-3 py-4 px-2 flex space-x-3 cursor-pointer"
          >
            <img src={home} alt="" />
            <p>Events</p>
          </Link>
          <Link
            to={"/contests"}
            className="hover:bg-gray-200 rounded-md my-3 py-4 px-2 flex space-x-3 cursor-pointer"
          >
            <img src={crown} alt="" />
            <p>Contest</p>
          </Link>
          <Link
            to={"/statistics"}
            className="hover:bg-gray-200 rounded-md my-3 py-4 px-2 flex space-x-3 cursor-pointer"
          >
            <img src={stats} alt="" />
            <p>Statistics</p>
          </Link>
          <li className="hover:bg-gray-200 rounded-md my-3 py-4 px-2 flex space-x-3 cursor-pointer">
            <img src={records} alt="" />
            <p>Blog</p>
          </li>
        </ul>
      </div>

      <li className="list-none w-fit h-fit my-3 py-4 px-2 text-center flex space-x-3 cursor-pointer">
        <img src={help} alt="help" />
        <p>Help</p>
      </li>
    </aside>
  );
};

export default Sidebar;
