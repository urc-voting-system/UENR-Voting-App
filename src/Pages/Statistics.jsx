import React from "react";
import Sidebar from "../Components/Sidebar";

const Statistics = ({ sidebarStatus, closeSidebar }) => {
  return (
    <div className="addform">
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />

      <div className="main_page">Statistics</div>
    </div>
  );
};
export default Statistics;
