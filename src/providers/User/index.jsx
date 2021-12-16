import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

export const UserContext = createContext([]);

const UserProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@BrutalHabits:token")) || "";
  const history = useHistory()

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
    history.push('/')
  };

  const editProfile = (data) => {
    api.patch(`/users/${userData.id}/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      toast.success('Perfil modificado!')
      userData.username = data.username
      userData.email = data.email
    })
    .catch((err) => toast.error('Username já em uso'))
  };

  return (
    <UserContext.Provider value={{ userData, token, getUserData, logout, editProfile, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
