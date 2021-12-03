import React from "react";

export const Navchat = ({ navState }) => {
  return (
    <div className="NavChat">
      <div className="container">
        <div>{navState}</div>
      </div>
    </div>
  );
};
