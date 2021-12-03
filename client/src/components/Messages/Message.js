import React from "react";

export const Message = ({ name, userName, data, time, ava }) => {
  return (
    <div className="message__content">
      <div style={name === userName ? { display: "none" } : null}>{name} </div>
      <div className="content__wrapper">
        <div>{data} </div>
        <div
          style={
            name === userName ? { color: "#DFDFDF" } : { color: "#14FF72" }
          }
        >
          {time}
        </div>
        {/* <img
          src={ava}
          alt='ava'
          style={{ width: 60 + "px", height: 59 + "px" }}
        /> */}
      </div>
    </div>
  );
};
