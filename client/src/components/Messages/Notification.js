import React from 'react'

export const Notification = ({name}) => {
    return (
        <div
        className="message__connection"
        style={{ textAlign: "center" }}
      >
        {name} connected to chat
      </div>
    )
}
