import React from "react";
import Sidebar from "../Components/Sidebar";
import StatTable from "../Components/StatTable";
import { logo, grid, edit, users, calendar, activity } from "../assets/index";
import Voteme from "../Components/Voteme";
const Statistics = ({ sidebarStatus, closeSidebar }) => {
  return (
    <div className="addform">
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />
      <div className="main_page">
        {/* dashboard */}
        <div className=" justify-center align-center my-10 hidden lg:flex">
          <h1 className="hmd font-bold">
            Let's <span className="text-indigo-900">Vote</span>
          </h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="container px-5 lg:px-20">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center  bg-white w-44 py-3 px-10 rounded-lg">
              <img src={grid} alt="grid logo" />
              <h1 className="font-bold text-xl">VoteMe</h1>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="pt-10 flex  justify-between">
              <StatTable
                title="Description"
                icon={edit}
                desc="Best programmer of the year award"
              />
              <StatTable title="Candidates " icon={users} desc="3 Candidates" />
              <StatTable
                title="Due Date"
                icon={calendar}
                desc="5th January  2019"
              />
              <StatTable title="Status" icon={activity} desc="On Progress" />
            </div>
          </div>
          <div className="pt-10">
            <Voteme />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
