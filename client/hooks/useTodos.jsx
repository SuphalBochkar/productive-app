import { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance"; // Import axiosInstance
import toast from "react-hot-toast";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/todo/all");
        setTodos(response.data.todos);
        setError(null);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.message || "An error occurred");
          toast.error(error.response.data.message || "An error occurred", {
            duration: 600,
          });
        } else if (error.request) {
          setError("No response received from server");
          toast.error("No response received from server", {
            duration: 600,
          });
        } else {
          setError("Error: " + error.message);
          toast.error("Error: " + error.message, {
            duration: 600,
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { todos, loading, error };
};

export default useTodos;
