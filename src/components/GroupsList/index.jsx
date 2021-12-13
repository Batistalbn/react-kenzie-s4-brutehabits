import { useContext } from "react";
import { Link } from "react-router-dom";
import { GroupsContext } from "../../providers/Groups";
import { Header, Pages } from "./styles";

const GroupsList = () => {
  const { groups, nextPage, previousPage, page, setFilter, handleClick } =
    useContext(GroupsContext);

  return (
    <div>
      <Header>
        <div>
          <h1>Grupos</h1>
          <button>+</button>
        </div>
        <input
          placeholder="Pesquisar"
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={handleClick}>Pesquisar</button>
      </Header>

      <div>
        {groups.map((element) => (
          <div key={element.id}>
            <Link to={`/dasboard/groups/${element.id}`}>
              <h3>{element.name}</h3>
            </Link>
            <p>{element.category}</p>
            <p>{element.description}</p>
            <span>Membros: {element.users_on_group?.length}</span>
          </div>
        ))}
      </div>

      <Pages>
        <button onClick={previousPage}>Página anterior</button>
        <p>{page}</p>
        <button onClick={nextPage}>Próxima página</button>
      </Pages>
    </div>
  );
};

export default GroupsList;
