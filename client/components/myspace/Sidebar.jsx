import React, { useEffect, useState } from "react";
import Sideoptions from "./Sideoptions";
import list from "/src/assets/list.svg";
import inbox from "/src/assets/inbox.svg";
import calender from "/src/assets/calender.svg";
import trash from "/src/assets/trash.svg";
import Sideheading from "./Sideheading";
import Sideprofile from "./Sideprofile";
import human from "/src/assets/huma.svg";
import left from "../../src/assets/leftarrow.svg";
import Signout from "./Signout";
import useUserDetails from "../../hooks/useUserDetails";

const Sidebar = () => {
  const { userDetails, loading } = useUserDetails(); // Destructure userDetails and loading from the hook

  return (
    <div className="h-full p-[2rem] flex flex-col justify-between ">
      <div>
        {loading || !userDetails ? (
          <Sideprofile label={`User's Space`} icon={human} />
        ) : (
          <Sideprofile
            label={`${userDetails.username}'s Space`}
            icon={userDetails.profilePic}
          />
        )}
        <Sideheading label={"General"} />
        <Sideoptions icon={list} label={"Todo"} />
        <Sideoptions icon={inbox} label={"Inbox"} />
        <Sideoptions icon={calender} label={"Calendar"} />
        <Sideoptions icon={trash} label={"Trash"} />
        <Sideheading label={"Task Progress"} />
      </div>
      <div className="">
        <Signout label={"Sign out"} icon={left} />
      </div>
    </div>
  );
};

export default Sidebar;
