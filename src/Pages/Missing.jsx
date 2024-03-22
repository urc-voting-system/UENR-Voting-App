import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="flex justify-center align-center flex-col mt-24 sm:mt-28 md:mt-10 hmd">
      <h1 className="text-center">The page you requested for was not found.</h1>
      <br />
      <p className="text-center">
        Go back to the
        <Link to={"/"} className="text-blue-500 underline">
          {" "}
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default Missing;
