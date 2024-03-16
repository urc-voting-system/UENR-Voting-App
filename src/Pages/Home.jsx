import React from "react";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { img } from "../assets/index";

const Home = ({ sidebarStatus, closeSidebar }) => {
  // EventsData =[
  //   {
  //     'image': "url",
  //     'title': "Event Name",
  //   },
  //   {
  //     'image': "url",
  //     'title': "Event Name",
  //   },
  // ]

  return (
    <div className="home">
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />

      <div className="main_page p-10">
        <div className="top-bar">
          <h1 className="font-bold text-2xl pb-10">Ongoing Events</h1>
          <div className="search-bar w-full ">
            <input
              type="text"
              className="w-full h-14 rounded-3xl border-2 border-[#474747] bg-transparent px-3 outline-none"
              placeholder="Enter event name...  "
            />
          </div>

          <div className="Events-Contianer pt-10">
           <div className="bg-white rounded-xl w-60 h-auto object-contain p-10">
            <div>
              <img src={img} alt="" />
            </div>
            <h2 className="font-semibold text-xl">Event Name</h2>
            <button className="bg-">View Cartegories</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
