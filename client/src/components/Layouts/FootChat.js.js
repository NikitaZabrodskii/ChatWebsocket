import React from "react";
import { AiOutlineSend } from "react-icons/ai";
export const FootChat = ({ messageValue, setMessageValue, sendMessage }) => {
  return (
    <div className="FootChat">
      <div className="container">
        <div className="FootChat__wrapper">
          <input
            className="FootChat__input"
            placeholder="Enter text message..."
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            onKeyUp={(e) => (e.key === "Enter" ? sendMessage() : null)}
          ></input>

          <AiOutlineSend
            onClick={messageValue ? sendMessage : null}
            style={{
              width: 30 + "px",
              height: 30 + "px",
              marginBottom: 18 + "px",
              position: "absolute",
              right: 0,
              bottom: 0,
              color: `${messageValue ? "#14FF72" : ""}`,
              transform: "rotate(-45deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
