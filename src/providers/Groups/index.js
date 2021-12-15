import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [displayGroup, setDisplayGroup] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const GroupsList = () => {
    api
      .get(`/groups/?page=${page}`)
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GroupsList();
  }, [page]);

  // Mudar paginas
  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Filtrar grupos
  const handleClick = () => {
    api.get(`/groups/?search=${filter}`).then((response) => {
      console.log(response.data.results);
      setGroups(response.data.results);
    });
  };

  // Meus grupos
  const Subscriptions = () => {
    api.get("/groups/subscriptions/").then((response) => {
      setGroups(response.data.results);
    });
  };

  // inscrever
  const Subscribe = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe`)
      .then(() => {
        toast.success("Inscrição feita com sucesso");
      })
      .catch((err) => {
        toast.error("Você já faz parte desse grupo");
      });
  };

  // Sair
  const Unsubscribe = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe`)
      .then(() => {
        toast.success("Você saiu do grupo");
      })
      .catch((err) => {
        toast.error("Você não está nesse grupo");
      });
  };

  const accessGroup = (group) => {
    setDisplayGroup(group);
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        nextPage,
        previousPage,
        page,
        setFilter,
        handleClick,
        Subscriptions,
        Subscribe,
        Unsubscribe,
        accessGroup,
        displayGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
