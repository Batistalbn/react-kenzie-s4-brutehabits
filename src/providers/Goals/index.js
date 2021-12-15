import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const DeleteGoals = (goalsId) => {
    api.delete(`/goals/${goalsId}/`).then(() => {
      toast.success("Meta excluida");
    });
  };

  return (
    <GoalsContext.Provider value={{ goals, setGoals, DeleteGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};
