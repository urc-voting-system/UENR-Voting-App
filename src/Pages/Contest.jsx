import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import logo from "../assets/logo.png";
import ContestsTable from "../Components/ContestsTable";
import { contestsData } from "../Data/contests";

const Contest = ({ sidebarStatus, closeSidebar }) => {
  const [contests, setContests] = useState(contestsData);

  return (
    <div>
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />

      <div className="main_page">
        <div className="flex justify-center align-center my-10 space-x-5">
          <h1 className="hmd font-bold">
            Let's <span className="text-indigo-900">Vote</span>
          </h1>
          <img src={logo} alt="logo" />
        </div>

        <div className="p-3 lg:p-0 w-full lg:w-5/6 my-10 mx-auto">
          <div className="flex space-x-4 bg-white w-fit py-3 px-10 rounded-sm">
            <span>&#9776;</span>
            <h1 className="font-bold">Dashboard</h1>
          </div>

          <ContestsTable contests={contests} />
        </div>
      </div>
    </div>
  );
};
export default Contest;
