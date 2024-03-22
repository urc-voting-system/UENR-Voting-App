import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

const AddForm = ({ sidebarStatus, closeSidebar }) => {
  const [profile, setProfile] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pollnumber, setPollNumber] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleFormSubmit = () => {
    console.log("form submitted");
  };

  return (
    <div className="addform">
      <Sidebar sidebarStatus={sidebarStatus} closeSidebar={closeSidebar} />

      <div className="main_page">
        <form id="addForm" onSubmit={handleFormSubmit}>
          <div
            id="box"
            className="bg-white shadow-md rounded-sm flex flex-col justify-start align-left"
          >
            <div className="w-20 h-20 bg-violet-600 rounded-full mx-auto my-0">
              {profile}
            </div>
            <div className="border-2 p-5 w-full my-4 put-middle">
              <input
                type="file"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
              />
            </div>

            <label>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-gray-200 p-1 h-28"
            ></textarea>

            <label className="mt-5">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-gray-200 mt-2 p-2 rounded-sm"
            />

            <label>Gender</label>
            <select
              className="bg-gray-200 mt-2 p-2"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div
            id="box"
            className="bg-white shadow-md rounded-sm flex flex-col justify-start align-left"
          >
            <label>Choose Award Category</label>
            <select className="bg-gray-200 mt-2 p-2">
              <option value="">Select Option</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </select>

            <label className="mt-5">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="bg-gray-200 mt-2 p-2 rounded-sm"
            />

            <label className="mt-5">Poll Number</label>
            <input
              type="text"
              value={pollnumber}
              onChange={(e) => setPollNumber(e.target.value)}
              className="bg-gray-200 mt-2 p-2 rounded-sm"
            />

            <label className="mt-5">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 mt-2 p-2 rounded-sm"
            />
            <label className="mt-5">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-gray-200 mt-2 p-2 rounded-sm"
            />
            <button className="btn_primary mt-5">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddForm;
