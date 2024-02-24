import React from "react";
import Sidebar from "../Components/Sidebar";
import logo from "../assets/logo.png";
import grid from "../assets/grid.svg";
import StatTable from "../Components/StatTable";
import edit from "../assets/edit.svg";
import users from "../assets/users.svg";
import calendar from "../assets/calendar.svg";
import activity from "../assets/activity.svg";

const Statistics = ({ sidebarStatus, closeSidebar }) => {
  return (
    <div className="addform">
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />
      <div className="main_page">
        {/* dashboard */}
        <div className="flex justify-center align-center my-10 ">
          <h1 className="hmd font-bold">
            Let's <span className="text-indigo-900">Vote</span>
          </h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="container px-20">
          <div className="flex justify-center items-center space-x-4 bg-white w-fit py-3 px-10 rounded-lg">
            <img src={grid} alt="grid logo" />
            <h1 className="font-bold text-xl">Dashboard</h1>
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
        </div>
      </div>
    </div>
  );
};
export default Statistics;
