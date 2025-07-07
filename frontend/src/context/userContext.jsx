import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();


export const UserContextProvider = (props) => {

    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token, setToken] = useState(localStorage.getItem("token") || '');   

    const value = {
    navigate,
    token, setToken
  };

  return (
    <userContext.Provider value={value}>
      {props.children}
    </userContext.Provider>
  );
};
