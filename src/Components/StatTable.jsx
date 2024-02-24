import React from 'react';

const StatTable = ({title , icon , desc}) => {
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold align-center text-center'>{title}</h1>
      </div>
      <div className='flex gap-2'>
        <img src={icon} alt="" />
        <p className='text-md font-semibold text-[#7A7A7A] '>{desc}</p>
      </div>
    </div>
  );
}

export default StatTable;
