import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  const userId = userObj?._id;

  // useEffect(() => {
  //   if (userId) {
  //     const socket = io("http://localhost:3000", {
  //       // Connect to your Socket.io server running on port 5000
  //       query: {
  //         userId: userId,
  //       },
  //     });
  //     setSocket(socket);
  //     socket.on("getOnlineUsers", (users) => {
  //       setOnlineUsers(users);
  //     });
  //     return () => socket.close();
  //   } else {
  //     if (socket) {
  //       socket.close();
  //       setSocket(null);
  //     }
  //   }
  // }, [userId]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
