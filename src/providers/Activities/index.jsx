import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { UserContext } from "../User";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { token } = useContext(UserContext);

  const [activities, setActivities] = useState([]);

  const DeleteActivities = (activitiesID) => {
    api
      .delete(`/activities/${activitiesID}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Atividade excluída");
      });
  };

  return (
    <ActivitiesContext.Provider
      value={{ activities, setActivities, DeleteActivities }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
