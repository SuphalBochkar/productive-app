import React from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { selectedConversationState } from "../../store/atoms.js";
import { extractTime } from "../../services/extractTime.js";
import { useRecoilState } from "recoil";
import useUserDetails from "../../hooks/useUserDetails.jsx";

const Message = ({ message }) => {
  const [selectedConversation] = useRecoilState(selectedConversationState);
  const userId = localStorage.getItem("userId");
  const { userDetails, loading, error } = useUserDetails();

  const fromMe = message.senderId === userId;
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? userDetails?.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe
    ? "bg-sky-200 text-black"
    : "bg-gray-800 text-white";

  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat bg ${chatClassName}`}>
      <div className="chat-image">
        <div className="w-10 rounded-full">
          <img alt="Chat Bubble Pic" src={`${profilePic}`} />
        </div>
      </div>
      <div className={`chat-bubble  ${bubbleBgColor} ${shakeClass} pb-2 `}>
        {message.message}
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
