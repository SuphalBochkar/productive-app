import React from "react";

import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/React";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "flowbite-react";
import TaskInput from "./TodoInput/TaskInput";
import TaskDetailsInfo from "./TaskDetailsInfo";
import Attachment from "./Attachment";
import Comments from "./Comments";
import { useRecoilState, useSetRecoilState } from "recoil"; // Import useSetRecoilState

import { sidebarToggleState, taskDetailsState } from "../../store/atoms";

const SaveTaskDetails = () => {
  const [sidebarToggle, setSidebarToggle] = useRecoilState(sidebarToggleState);
  const [taskDetails, setTaskDetails] = useRecoilState(taskDetailsState);

  const cancelHandle = () => {
    setSidebarToggle("none");
  };

  return (
    <div className="p-4 w-[30rem] h-full relative font-AlbertSans transition">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl">Task Details</h3>
        <div>
          <button
            type="button"
            className="text-white bg-[#6161ff] hover:bg-[#4f4ff5] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save
          </button>
          <button
            type="button"
            className="font-medium text-sm px-5 py-2.5 me-2 mb-2 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => cancelHandle()}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="border p-4 rounded-xl m-1 mt-5">
        <h6 className="mb-3 text-gray-400 font-semibold">My Work Task</h6>
        <label
          for="title"
          className="block my-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Enter Title:
        </label>
        <input
          id="title"
          type="text"
          placeholder="Title goes here.."
          className="p-5 w-full text-2xl border rounded-lg m-auto"
        />
        <label
          for="description"
          className="block my-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Enter Description:
        </label>
        <textarea
          id="description"
          rows="4"
          className="block p-2.5 w-full text-sm my-3 bg-white rounded-lg border focus:border-blue-500"
          placeholder="Enter the description..."
        ></textarea>
        {/* <TaskInput title={"Assignee"} label={"22 April 2024"} />
        <TaskInput title={"Time"} label={"22 April 2024"} />
        <TaskInput title={"Type"} label={"22 April 2024"} /> */}
        <Assignee />
        <TimeInput />
        <TypeInput />
      </div>
    </div>
  );
};

const Assignee = () => {
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);

  return (
    <div className="flex items-center">
      <div className="w-[40vw] text-2xl">Assignee</div>
      <div className="w-[70vw] flex">
        <img src={userObj.profilePic} alt="" srcset="" className="w-12 h-12" />
        <div className="text-lg flex items-center">{userObj.username}</div>
      </div>
    </div>
  );
};

const TimeInput = () => {
  return (
    <div className="flex items-center">
      <div className="w-[40vw] text-2xl">Time</div>
      <div className="w-[70vw] flex">
        <input
          type="time"
          id="time"
          className="leading-none border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-[130px]"
          min="09:00"
          max="18:00"
          value="00:00"
          required
        />
      </div>
    </div>
  );
};

const TypeInput = () => {
  return (
    <div className="flex items-center">
      <div className="w-[40vw] text-2xl">Type</div>
      <div className="w-[70vw]">
        <Dropdown label="Dropdown" className="">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default SaveTaskDetails;
