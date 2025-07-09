import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userReviews, books } from "../assets/assets.js";
export const userContext = createContext();


export const UserContextProvider = (props) => {

    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem("token") || '');   

    const value = {
    navigate,
    token, setToken,
    userReviews, books
  };

  return (
    <userContext.Provider value={value}>
      {props.children}
    </userContext.Provider>
  );
};
