import { useState } from "react";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";
import axiosInstance from "../services/axiosInstance";
import { selectedConversationState } from "../store/atoms";
import { setMessages } from "../store/selectors";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedConversation] = useRecoilState(selectedConversationState);

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        `/chat/message/send/${selectedConversation._id}`,
        { message }
      );
      const data = res.data;
      if (data.error) throw new Error(data.error);

      // Assuming messages is an array of messages
      // Replace this logic with your own, depending on how you manage messages
      // Append the new message to the existing messages array
      setMessages((prevMessages) => [...prevMessages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
