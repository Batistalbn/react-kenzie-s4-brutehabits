import { createContext } from "react";
import jwtDecode from "jwt-decode";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

export const UserContext = createContext([]);

const UserProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@BrutalHabits:token")) || "";
  const userData = JSON.parse(localStorage.getItem("@BrutalHabits:userData")) || "";
  const history = useHistory();

  const getUserData = (token) => {
    const decoded = jwtDecode(token);
    const userId = decoded.user_id;

    api.get(`/users/${userId}/`).then((response) => {
      localStorage.setItem(
        "@BrutalHabits:userData",
        JSON.stringify(response.data)
      );
    });
  };

  const logout = () => {
    localStorage.removeItem("@BrutalHabits:token");
    localStorage.removeItem("@BrutalHabits:userData");
    history.push("/");
  };

  const editProfile = (data) => {
    api
      .patch(`/users/${userData.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Perfil modificado!");
        localStorage.setItem(
          "@BrutalHabits:userData",
          JSON.stringify(response.data)
        );
      })
      .catch((err) => toast.error("Username já em uso"));
  };

  return (
    <UserContext.Provider
      value={{ userData, token, getUserData, logout, editProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
