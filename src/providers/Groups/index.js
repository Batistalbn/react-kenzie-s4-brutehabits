import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);

  const GroupsList = () => {
    api
      .get(`/groups/?page=${page}`)
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    GroupsList();
  }, [page]);

  return (
    <GroupsContext.Provider value={{ groups, nextPage, previousPage, page }}>
      {children}
    </GroupsContext.Provider>
  );
};
