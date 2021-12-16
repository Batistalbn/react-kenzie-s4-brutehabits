import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { UserContext } from "../User";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const { token } = useContext(UserContext);
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
    console.log(token);
    api
      .get(`/habits/personal/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
        console.log(response);
      })

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
        toast.success("Habito cadastrado com sucesso");
      })
      .catch((err) => toast.err("Erro ao cadastrar Habito, tente novamente"));
  };

  // Atualizar um Habito

  const HabitUpdate = (habitId, data) => {
    api
      .patch(`/habits/${habitId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => toast.success("Habito atualizado com sucesso"))
      .catch((err) => toast.err("Falha ao atualizar , tente novamente"));
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
