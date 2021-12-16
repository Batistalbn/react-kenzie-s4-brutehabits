import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const token = localStorage.getItem("@BrutalHabits:token") || "";
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [newHabit, setNewHabit] = useState({
    title: "",
    category: "",
    difficulty: "",
    frequency: "",
    achieved: false,
    how_much_achieved: 0,
    user: 0,
  });

  // Listar Habitos
  const HabitsList = () => {
    api
      .get(`/habits/personal/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    HabitsList();
  }, []);

  //Cadastrar novo habito

  const HabitCreate = (newHabit) => {
    api
      .post(`/habits/`, newHabit, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.sucess("Habito cadastrado com sucesso");
      })
      .catch((err) => toast.err("Erro ao cadastrar Habito, tente novamente"));
  };

  // Atualizar um Habito

  const HabitUpdate = (habitId, data) => {
    api
      .patch(`/habits/${habitId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => toast.sucess("Habito atualizado com sucesso"))
      .catch((err) => toast.err("Falha ao atualizar , tente novamente"));
  };
  // Deletar um Habito

  const HabitDelete = (habitId) => {
    api
      .delete(`/habits/${habitId}/`)
      .then(() => toast.sucess("Habito foi removido"));
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
        newHabit,
        setNewHabit,
        HabitsList,
        HabitCreate,
        HabitUpdate,
        HabitDelete,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
