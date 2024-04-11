import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedConversationState, searchState } from "../../store/atoms";
import useGetConversationUsers from "../../hooks/useGetConversationUsers";
import useFetchUsers from "../../hooks/useFetchUsers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import MessageSkeleton from "./MessageSkeleton";

const Conversations = () => {
  const [selectedConversation, setSelectedConversation] = useRecoilState(
    selectedConversationState
  );
  const [search, setSearch] = useRecoilState(searchState);

  const { loading: conversationLoading, conversations } =
    useGetConversationUsers();
  const { loading: usersLoading, users } = useFetchUsers(search);

  let usersToDisplay = [];
  if (search) {
    // Display fetched users if there is a search query
    usersToDisplay = usersLoading ? [] : users;
  } else {
    // Display previous chats if there is no search query
    usersToDisplay = conversationLoading ? [] : conversations;
  }

  const handleUserSelect = (user) => {
    setSelectedConversation(user);
    setSearch("");
  };

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className="">
      {conversationLoading && <MessageSkeleton n={10} />}
      {usersToDisplay.map((user) => (
        <div
          key={user._id}
          className="flex hover:bg-[#6161ff] hover:text-white hover:cursor-pointer m-1 py-3 px-5 rounded-lg items-center"
          onClick={() => handleUserSelect(user)}
        >
          <div className="hidden">ID: {user._id}</div>
          <img src={user.profilePic} className="h-10 mr-3" alt="" />
          <div className="text-lg font-bold">{toTitleCase(user.username)}</div>
          <div className="hidden">Email: {user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Conversations;
