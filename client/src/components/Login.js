import React from "react";
// import { useState } from "react";
// import { FileUploader } from "./Fileuploader";
export const Login = ({ connect, userName, setUserName, setLinkImg }) => {
  return (
    <div className='center'>
      <form onSubmit={connect} className="form">
        <input
          required
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {/* <input
          required
          onChange={(e) => setLinkImg(e.target.value)}
          placeholder="вставь адрес до картинки"
        /> */}
        <button>Submit</button>
        {/* 
        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        /> */}
      </form>
    </div>
  );
};
