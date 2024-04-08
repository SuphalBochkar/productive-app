import React from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { selectedConversationState } from "../../store/atoms.js";
import { extractTime } from "../../services/extractTime.js";
import { useRecoilState } from "recoil";
import useUserDetails from "../../hooks/useUserDetails.jsx";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { userDetails, loading, error } = useUserDetails();

  const [selectedConversation, setSelectedConversation] = useRecoilState(
    selectedConversationState
  );

  const fromMe = message.senderId === userDetails?._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  console.log(message);
  console.log(fromMe);

  const profilePic = fromMe
    ? authUser.profilePic
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
