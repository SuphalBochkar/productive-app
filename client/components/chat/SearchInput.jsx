import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedConversationState } from "../../store/atoms";
import { searchState } from "../../store/atoms";

// const SearchInput = () => {
//   const [search, setSearch] = useState("");
//   const [selectedConversation, setSelectedConversation] = useRecoilState(
//     selectedConversationState
//   );
//   const { conversations } = useGetConversationUsers();

//   const handleChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearch(value);

//     if (!value) {
//       setSelectedConversation([]);
//       return;
//     }

//     // const users = conversations.find((c) =>
//     const users = conversations.filter((c) =>
//       c.username.toLowerCase().includes(value)
//     );

//     console.log("Search:", value);
//     console.log("users:", users);

//     if (users.length > 0) {
//       setSelectedConversation(users);
//     } else {
//       setSelectedConversation([]);
//       selectedConversation;
//       toast.error("No User found");
//     }
//   };

//   return (
//     <form action="">
//       <input
//         type="text"
//         placeholder="Search username...."
//         onChange={handleChange}
//       />
//     </form>
//   );
// };
// export default SearchInput;

const SearchInput = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const setSelectedConversation = useSetRecoilState(selectedConversationState);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (!value) {
      setSelectedConversation([]);
      return;
    }
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search username...."
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
};

export default SearchInput;
