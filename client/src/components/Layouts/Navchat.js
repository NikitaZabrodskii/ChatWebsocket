import React from "react";

export const Navchat = ({ navState }) => {
    console.log(navState)
  return (
    <div className="NavChat">
      <div className="container">
        <div className='navNick'>{navState}</div>
      </div>
    </div>
  );
};
