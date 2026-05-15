import React from "react";
import { LuBot, LuX } from "react-icons/lu";
import "../styles/BotIcon.css";

interface BotIconProps {
  showChat: boolean;
  toggleChat: () => void;
}

const BotIcon: React.FC<BotIconProps> = ({ showChat, toggleChat }) => {
  return (
    <div className="bot-container">
      <div className="bot-icon" onClick={toggleChat}>
        {showChat ? (
          React.createElement(LuX as any, { size: 28 })
        ) : (
          <img
            src="/bot-avatar.jpg"
            className="agent-image"
          />
        )}
      </div>
    </div>
  );
};

export default BotIcon;
