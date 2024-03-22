import React from "react";
import Sidebar from "../Components/Sidebar";
const Statistics = ({ sidebarStatus, closeSidebar }) => {
  return (
    <div>
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />
      <div className="main_page">
        <h1>Satistics</h1>
      </div>
    </div>
  );
};
export default Statistics;
