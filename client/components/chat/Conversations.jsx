import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedConversationState, searchState } from "../../store/atoms";
import useGetConversationUsers from "../../hooks/useGetConversationUsers";
import useFetchUsers from "../../hooks/useFetchUsers";

const Conversations = () => {
  const setSelectedConversation = useSetRecoilState(selectedConversationState);
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

  return (
    <div className="">
      {usersToDisplay.map((user) => (
        <div key={user._id} className="hover:bg-gray-300 hover:cursor-pointer m-1 p-5 rounded-lg" onClick={() => handleUserSelect(user)}>
          <div className="hidden">ID: {user._id}</div>
          <div className="text-lg font-bold">{user.username}</div>
          <div className="hidden">Email: {user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Conversations;
