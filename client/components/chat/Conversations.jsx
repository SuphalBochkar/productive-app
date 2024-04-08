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
    <div>
      {usersToDisplay.map((user) => (
        <div key={user._id} onClick={() => handleUserSelect(user)}>
          <div>ID: {user._id}</div>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Conversations;
