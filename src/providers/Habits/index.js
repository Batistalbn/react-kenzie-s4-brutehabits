import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { UserContext } from "../User";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@BrutalHabits:token")) || "";
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [habitID, setHabitID] = useState([]);
  const [open, setOpen] = useState(false);
  // Listar Habitos
  const HabitsList = () => {
    api
      .get(`/habits/personal/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
      })

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    HabitsList();
  }, [habits]);

  //Cadastrar novo habito

  const HabitCreate = (newHabit) => {
    api
      .post(`/habits/`, newHabit, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Habito cadastrado com sucesso");
      })
      .catch((err) => toast.error("Erro ao cadastrar Habito, tente novamente"));
  };

  // Atualizar um Habito

  const HabitUpdate = (habit) => {
    api
      .patch(`/habits/${habitID}/`, habit, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => toast.success("Habito atualizado com sucesso"))
      .catch((err) => toast.error("Falha ao atualizar , tente novamente"));
  };
  // Deletar um Habito

  const HabitDelete = (habitId) => {
    api
      .delete(`/habits/${habitId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => toast.success("Habito foi removido"));
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        habit,
        setHabit,
        filtered,
        setFiltered,
        HabitsList,
        HabitCreate,
        HabitUpdate,
        HabitDelete,
        habitID,
        setHabitID,
        open,
        setOpen,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
