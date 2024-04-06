import { useState, useEffect } from "react";
import ContestsTable from "./ContestsTable";

const ParentComponent = () => {
  const [contestsData, setContestsData] = useState([]);

  useEffect(() => {
    fetch("https://michaelangelo360.pythonanywhere.com/categorys/")
      .then((response) => response.json())
      .then((data) => setContestsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Contests Table</h1>
      <ContestsTable contests={contestsData} />
    </div>
  );
};

export default ParentComponent;
