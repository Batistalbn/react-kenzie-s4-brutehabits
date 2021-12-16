import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const DeleteActivities = (activitiesID) => {
    api.delete(`/activities/${activitiesID}/`).then(() => {
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
