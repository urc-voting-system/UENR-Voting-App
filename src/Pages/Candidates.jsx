import { useParams } from "react-router";
import Sidebar from "../Components/Sidebar";
import StatTable from "../Components/StatTable";
import { logo, grid, edit, users, calendar, activity } from "../assets/index";
import Voteme from "../Components/Voteme";
import "./Pages.scss";

const Candidates = ({ sidebarStatus, closeSidebar, contestsData }) => {
  const { id } = useParams();
  const contest = contestsData.find((contest) => contest.id == id);

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
            <div className="flex align-cneter space-x-2 justify-center bg-white w-44 p-2 mt-5 rounded-lg">
              <img src={grid} alt="grid logo" />
              <h1 className="font-bold text-xl">VoteMe</h1>
            </div>
          </div>

          <div className="contest_info">
            <StatTable
              id="contest_info_box"
              title="Description"
              icon={edit}
              desc={contest.title}
            />
            <StatTable
              id="contest_info_box"
              title="Candidates "
              icon={users}
              desc={`${contest.candidates.length} condidates`}
            />
            <StatTable
              id="contest_info_box"
              title="Due Date"
              icon={calendar}
              desc={contest.date}
            />
            <StatTable
              id="contest_info_box"
              title="Status"
              icon={activity}
              desc={contest.status}
            />
          </div>
          <div className="py-10">
            <Voteme candidates={contest.candidates} status={contest.status} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Candidates;
