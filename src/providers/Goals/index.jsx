import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { UserContext } from "../User";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [goals, setGoals] = useState([]);

  const DeleteGoals = (goalsId) => {
    api
      .delete(`/goals/${goalsId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Meta excluida");
      });
  };

  return (
    <GoalsContext.Provider value={{ goals, setGoals, DeleteGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};
