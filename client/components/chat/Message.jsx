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
    ? "bg-sky-200 text-black p-2"
    : "bg-gray-800 text-white p-2 rounded-xl";

  const userName = fromMe
    ? userDetails?.username
    : selectedConversation?.username;

  const sore = fromMe ? "flex-start" : "flex-end";

  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <>
      {fromMe ? (
        <div className="flex justify-end">
          <div class="flex items-end gap-2.5 m-3 max-w-[1000px]">
            <div
              className={`flex flex-col w-full max-w-[700px] leading-1.5 p-4 border-gray-200 bg-[#3a3a3a] rounded-e-xl rounded-xl`}
              style={{ overflowWrap: "break-word" }}
            >
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  {userName}
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {formattedTime}
                </span>
              </div>
              <div class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                {message.message}
              </div>
            </div>
            <img
              class="w-8 h-8 rounded-full"
              src={profilePic}
              alt="Jese image"
            ></img>
          </div>
        </div>
      ) : (
        <div class="flex items-start gap-2.5 m-3">
          <img
            class="w-8 h-8 rounded-full"
            src={profilePic}
            alt="Jese image"
          ></img>
          <div
            className={`flex flex-col w-full max-w-[200px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-xl bg-[#0783ff]`}
          >
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
              <span class="text-sm font-semibold text-gray-900 dark:text-white">
                {userName}
              </span>
              <span class="text-sm font-normal text-white dark:text-gray-100">
                {formattedTime}
              </span>
            </div>
            <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              {message.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
