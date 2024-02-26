import React from "react";

import { profile1, } from "../assets/index";

// Dummy data for the profiles
const profiles = [
  { id: 1, name: "Amanda Gordon", image: profile1 },
  { id: 2, name: "James Smith", image: profile1 },
  { id: 3, name: "Patricia Johnson", image: profile1 },
];

const Voteme = () => {
  return (
    
    <div className="grid grid-cols-2 gap-10   lg:grid-cols-4 ">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-white h-[15rem] w-[10rem] rounded-md relative p-5">
          <div className="rounded-full over overflow-hidden">
            <img
              src={profile.image}
              alt={profile.name}
              className="flex justify-center items-center"
            />
          </div>
          <div className="pt-3 flex flex-col items-center justify-center">
            <h1 className="pb-1 text-md font-medium">{profile.name}</h1>
            <button className="text-xl font-semibold border-[3px] rounded px-10 py-2 text-[#7A7A7A]">
              VOTE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Voteme;
