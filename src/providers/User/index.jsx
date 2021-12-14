import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import api from "../../services/api";

export const UserContext = createContext([]);

const UserProvider = ({ children }) => {
  const token = localStorage.getItem("@BrutalHabits:token") || "";

  const [userData, setUserData] = useState({});

  const getUserData = (token) => {
    const decoded = jwtDecode(token);
    const userId = decoded.user_id;

    api
      .get(`/users/${userId}/`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("@BrutalHabits:token");
    setUserData({});
  };

  return (
    <UserContext.Provider value={{ userData, token, getUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
