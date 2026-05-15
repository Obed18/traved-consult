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
            src="https://img.freepik.com/premium-photo/close-up-cartoon-character-wearing-headset-tie_988987-24244.jpg?w=2000"
            className="agent-image"
          />
        )}
      </div>
    </div>
  );
};

export default BotIcon;
