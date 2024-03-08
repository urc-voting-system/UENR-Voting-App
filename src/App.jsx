import { useState } from "react";
import "./App.scss";
import Home from "./Pages/Home";
import AddForm from "./Pages/AddForm";
import Contest from "./Pages/Contest";
import Candidates from "./Pages/Candidates";
import Missing from "./Pages/Missing";
import Statistics from "./Pages/Statistics";
import { contestsData } from "./Data/contests";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [sidebarStatus, setSidebarStatus] = useState("close");

  const openSidebar = () => {
    setSidebarStatus("open");
  };

  const closeSidebar = () => {
    setSidebarStatus("close");
  };

  return (
    <Router>
      <header className="shadow-md">
        <span className="menubtn" onClick={openSidebar}>
          &#9776;
        </span>
      </header>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />
            }
          />
          <Route
            path={"addform"}
            element={
              <AddForm
                sidebarStatus={sidebarStatus}
                closeSidebar={closeSidebar}
              />
            }
          />
          <Route
            path={"contests"}
            element={
              <Contest
                sidebarStatus={sidebarStatus}
                closeSidebar={closeSidebar}
              />
            }
          />
          <Route
            path={"candidates/:id"}
            element={
              <Candidates
                sidebarStatus={sidebarStatus}
                closeSidebar={closeSidebar}
                contestsData={contestsData}
              />
            }
          />
          <Route path={"*"} element={<Missing />} />
          <Route
            path={"statistics"}
            element={
              <Statistics
                sidebarStatus={sidebarStatus}
                closeSidebar={closeSidebar}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
