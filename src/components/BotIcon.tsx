import React from "react";
import "../styles/BotIcon.css";

const BotIcon: React.FC = () => {
  return (
    <div className="bot-container">
      <div className="bot-icon">
        <div className="bot-icon-inner">
          <img
            src="/bot-avatar.jpg"
            alt="Chat with Traved Consult"
            className="agent-image"
          />
          <span className="bot-icon-active"></span>
        </div>
        {/* <span className="bot-icon-text">Chat with us</span> */}
      </div>
    </div>
  );
};

export default BotIcon;
