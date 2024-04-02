import React from "react";
import SideBar from "../components/chat/SideBar";
import MessagesContainer from "../components/chat/MessagesContainer";

const UserChat = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overgflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <SideBar />
      <MessagesContainer />
    </div>
  );
};

export default UserChat;
