import React from 'react';
import './Message.css';

const Message = ({ text }) => {
    return (
        <div className="message-container">
            <p>{text}</p>
        </div>
    );
}

export default Message;
