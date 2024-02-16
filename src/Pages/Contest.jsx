import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import logo from "../assets/logo.png";
import ContestsTable from "../Components/ContestsTable";

const Contest = ({ sidebarStatus, closeSidebar }) => {
  const [contests, setContests] = useState([
    {
      id: 1,
      day: "Friday",
      date: "13th February, 2024",
      status: "In Progress",
      status_id: "Ongoing",
      title: "Best Programmer",
    },
    {
      id: 2,
      day: "Monday",
      date: "17th February, 2024",
      status: "Coming Soon",
      status_id: "Coming",
      title: "Most Elagant Male",
    },
    {
      id: 3,
      day: "Saturday",
      date: "23rd February, 2024",
      status: "Closed",
      status_id: "Closed",
      title: "Best Photographer",
    },
  ]);
  return (
    <div className="addform">
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
