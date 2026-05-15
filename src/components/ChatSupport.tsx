import React, {
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import "../styles/ChatSupport.css";
import { IoIosSend } from "react-icons/io";
import { RiAttachment2 } from "react-icons/ri";

type Sender = "user" | "bot";

interface Message {
  text: string;
  sender: Sender;
}

interface ChatSupportProps {
  onClose?: () => void;
}

const ChatSupport: React.FC<ChatSupportProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
      setMessages([
        {
          text: "Welcome to Traved Consult Chat Support. How may I help you?",
          sender: "bot",
        },
      ]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (): void => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        text: "Thank you for your message! Hold on while we connect you to an agent.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="avatar">
          <img
            src="/main.png"
            alt="User Avatar"
            className="avatar-image"
          />
        </div>
        <p>Traved Consult</p>
      </div>

      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}

        {isTyping && (
          <div className="chat-typing">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />

        {React.createElement(IoIosSend as any, {
          className: `send-icon ${input.trim() ? "active" : "disabled"}`,
          onClick: handleSendMessage
        })}

        <div className="footer-icons">
          {React.createElement(RiAttachment2 as any, {})}
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
