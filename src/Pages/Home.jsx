import "./Pages.scss";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

const Home = ({ sidebarStatus, closeSidebar }) => {
  return (
    <div className="home">
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />

      <div className="main_page">
        <div className="grid grid-col-1 lg:grid-cols-2 gap-3 mt-3 sm:mt-5 p-5 sm:p-7">
          <div className="bg-white shadow-md rounded-sm p-7">
            <h1 className="hsm font-bold">Awards Nomination Form</h1>
            <p className="text-gray-500 my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              incidunt minima exercitationem.
            </p>
            <Link to={"/addform"} className="btn_primary float-right">
              Fill Form
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-sm p-7">
            <h1 className="hsm font-bold">Cast Votes</h1>
            <p className="text-gray-500 my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              incidunt minima exercitationem.
            </p>
            <Link to="/contests" className="btn_primary float-right">
              Vote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
