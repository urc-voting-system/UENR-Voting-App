import React from "react";
import Sidebar from "../Components/Sidebar";

const Candidates = ({ sidebarStatus, closeSidebar }) => {
  return (
    <div className="addform">
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />

      <div className="main_page">Candidates</div>
    </div>
  );
};
export default Candidates;
