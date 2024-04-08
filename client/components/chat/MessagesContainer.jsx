import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useAuthContext } from "../../context/AuthContext";
import { selectedConversationState } from "../../store/atoms";
import useUserDetails from "../../hooks/useUserDetails";
import SingleConversation from "./SingleConversation";
import MessageInput from "./MessageInput";

const MessagesContainer = () => {
  const [selectedConversation, setSelectedConversation] = useRecoilState(
    selectedConversationState
  );

  useEffect(() => {
    // Cleanup function (unmounts)
    return () => setSelectedConversation([]);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedConversation.length === 0 ? (
        <NoChatSelectedComponent />
      ) : (
        <>
          <div className="px-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.username}
            </span>
          </div>
          <SingleConversation />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelectedComponent = () => {
  const { userDetails, loading } = useUserDetails();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2">
        <p>Welcome {userDetails?.username}</p>
        <p>Select a chat to stsart messaging</p>
      </div>
    </div>
  );
};

export default MessagesContainer;
