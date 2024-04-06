import { useState, useEffect } from "react";
import "./Pages.scss";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch } from "react-icons/fa";
// import try1 from "../assets/try1.png";

const Home = ({ sidebarStatus, closeSidebar }) => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch("/api/events/")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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

          <div className="Events-Contianer pt-10 grid  grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-10">
            {eventData.map((event, index) => (
              <div
                key={index}
                className="bg-transparent  rounded-xl w-60 h-auto object-contain"
              >
                <div className="">
                  <img src={event.image} alt="" />
                </div>
                <div className="sub  p-2 ">
                  <h2 className="font-semibold text-xl">{event.title}</h2>
                  <div className="">
                    <button className="p-3 text-xl font-semibold flex  justify-center items-center gap-4 text-black ">
                      <FaArrowRight />
                      <Link to="/contests" className="">
                        View Categories
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
