import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div>
      <h1>The page you requested was not found</h1>
      <p>
        Go back to the
        <Link to={"/"} className="text-blue-500">
          {" "}
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default Missing;
