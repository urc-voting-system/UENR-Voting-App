import { useState } from "react";
import "./CompStyles.scss";

// const profiles = [
//   { id: 1, name: "Amanda Gordon", image: profile1, votes: 0 },
//   { id: 2, name: "James Smith", image: profile1, votes: 0 },
//   { id: 3, name: "Patricia Johnson", image: profile1, votes: 0 },
// ];

const Popup = ({ isOpen, onClose, onVote, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-1 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={onClose}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className="flex justify-between m-4">
          <button
            onClick={onVote}
            className="bg-[#40C0E7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Vote
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Voteme = ({ candidates, status }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [voteCount, setVoteCount] = useState(1);

  const handleOpenPopup = (name) => {
    setSelectedProfile(name);
    setIsPopupOpen(true);
  };

  const handleVote = () => {
    alert(`Casting ${voteCount} vote(s) for ${selectedProfile}`);
    setIsPopupOpen(false);
    setVoteCount(1);
  };

  return (
    <div className="candidates_list">
      {candidates.map(({ id, name, img }) => (
        <div
          key={id}
          className="bg-white h-[15rem] w-[10rem] rounded-md relative p-5"
        >
          <div className="rounded-full overflow-hidden">
            <img
              src={img}
              alt={name}
              className="flex justify-center items-center"
            />
          </div>
          <div className="pt-3 flex flex-col items-center justify-center">
            <h1 className="pb-1 text-md font-medium">{name}</h1>
            <button
              onClick={() => handleOpenPopup(name)}
              className="text-xl font-semibold border-[3px] rounded px-10 py-2 text-[#7A7A7A]"
            >
              VOTE
            </button>
          </div>
        </div>
      ))}

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onVote={handleVote}
        className=""
      >
        <h2 className="text-lg font-semibold text-center">Number Of Votes</h2>
        <input type="tel" placeholder="+233 (0)12 345 6789"
          className="mt-2  border rounded p-1 w-full"
         />
        <input
          type="number"
          value={voteCount}
          onChange={(e) => setVoteCount(e.target.value)}
          min="1"
          className="mt-2  border rounded p-1 w-full"
          />
      
      </Popup>
    </div>
  );
};

export default Voteme;
