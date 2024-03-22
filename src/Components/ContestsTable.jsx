import "./CompStyles.scss";
import { Link } from "react-router-dom";

const ContestsTable = ({ contests }) => {
  return (
    <main className="contestsTable my-10">
      <div className="bg-white grid grid-cols-3 my-4 py-2 rounded-t-md">
        <h1 className="hsm text-center">Position</h1>
        <h1 className="hsm text-center">Due Date</h1>
        <h1 className="hsm text-center">Status</h1>
      </div>
      <div className="contests_container">
        {contests.map(({ id, day, title, date, status, status_id }) => (
          <div key={id} id="contest_box" className="bg-white p-5 my-3">
            <div className="flex flex-col sm:flex-row align-center space-x-3">
              <div className="w-20 h-20 rounded-full bg-violet-700"></div>
              <h1 className="font-bold hsm">{title}</h1>
            </div>

            {/*  */}
            <div className="flex flex-col sm:flex-row align-center justify-between">
              <div className="flex flex-row space-x-3 sm:space-x-0 sm:flex-col justify-center align-center">
                <h1>{day}</h1>
                <h1>{date}</h1>
              </div>

              {/*  */}
              <div
                id="contest_status"
                className="flex flex-row sm:flex-col space-x-2 justify-center align-center mt-5 sm:mt-0"
              >
                <h1 className={`rounded-md p-2 cursor-default ${status_id}`}>
                  {status}
                </h1>
                <Link to={`/candidates/${id}`} className="btn_primary my-3">
                  Vote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ContestsTable;
