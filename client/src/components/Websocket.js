import { useRef, useState } from "react";

import { FootChat } from "./Layouts/FootChat.js";
import { Navchat } from "./Layouts/Navchat.js";
import { Login } from "./Login";
import { Message } from "./Messages/Message";
import { Notification } from "./Messages/Notification";
import "./websocket.scss";

const Websocket = () => {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState("");
  const [connectValue, setConnectValue] = useState(false);
  const [userName, setUserName] = useState("");
  const [navState, setNavState] = useState('')
  // const [selectedFile, setSelectedFile] = useState(null);
  const [linkImg, setLinkImg] = useState("");


  function connect(e) {
    e.preventDefault();
    console.log("working");
    socketRef.current = new WebSocket("ws://localhost:5000");

    socketRef.current.onmessage = (message) => {
      message = JSON.parse(message.data);
      console.log(message);
     if(message.event === 'connection' && userName!== message.name){
       setNavState(message.name)
     }else if(navState === '' && userName!== message.name){
       setNavState(message.name)
     }


      setMessages((prev) => [...prev, message]);
    };
    socketRef.current.onopen = () => {
      setConnectValue(true);
      const message = {
        event: "connection",
        id: Date.now(),
        data: `${userName} connect in to the chat`,
        name: userName,
      };
      console.log(message.ava);
   
      socketRef.current.send(JSON.stringify(message));

      console.log("connection is true");
    };
    socketRef.current.onerror = () => {
      console.log("error");
    };
    socketRef.current.onclose = (message) => {
      console.log("out");
      message = {
        data: `${userName} has left the chat`,
      };
      socketRef.current.send(JSON.stringify(message));
    };
  }

  function sendMessage() {
    const time = new Date();
    if (messageValue) {
    }

    const message = {
      id: Date.now(),
      event: "message",
      name: userName,
      data: messageValue,
      img: linkImg,
      time: time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    socketRef.current.send(JSON.stringify(message));
    setMessageValue("");
  }

  if (!connectValue)
    return (
      <Login
        connect={connect}
        userName={userName}
        setUserName={setUserName}
        setLinkImg={setLinkImg}
      />
    );

  return (
    <div className="chatWindow">
      <Navchat navState={navState} />

      <div className="MainChat">
        <div className="container">
          {messages.map((message) => (
            <div
              className={
                message.name === userName ? "message my" : "message any"
              }
              key={message.id}
              style={
                message.event === "connection"
                  ? {
                      margin: "auto",
                      marginBottom: 50 + "px",
                      marginTop: 50 + "px",
                      background: "grey",
                      textAlign: "center",
                    }
                  : null
              }
            >
              {message.event === "connection" ? (
                <Notification name={message.name} />
              ) : (
                <Message
                  name={message.name}
                  userName={userName}
                  data={message.data}
                  time={message.time}
                  ava={message.img}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <FootChat
        messageValue={messageValue}
        setMessageValue={setMessageValue}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Websocket;
