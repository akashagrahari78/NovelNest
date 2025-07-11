import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userReviews, books } from "../assets/assets.js";
import { toast } from "react-toastify";
import axios from 'axios'
export const userContext = createContext();

export const UserContextProvider = (props) => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [allPost, setAllPost] = useState([]);

const getAllPost = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/post/list`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    
    if (response.data.success) {
      setAllPost(response.data.posts);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    toast.error(error.response?.data?.message || "Failed to fetch posts");
  }
};
  useEffect(() => {
    getAllPost();
  }, []);

  useEffect(() => {
    console.log("Updated allPost:", allPost);  
  }, [allPost]);

  const value = {
    navigate,
    token,
    setToken,
    userReviews,
    books,
    allPost, getAllPost
  };

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
};
