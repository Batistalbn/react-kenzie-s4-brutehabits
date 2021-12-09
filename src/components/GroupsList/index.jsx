import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import { Header, Pages } from "./styles";

const GroupsList = () => {
  const { groups, nextPage, previousPage, page } = useContext(GroupsContext);
  console.log(groups);

  return (
    <div>
      <Header>
        <div>
          <h1>Grupos</h1>
          <button>+</button>
        </div>
        <input placeholder="Pesquisar" />
      </Header>

      <div>
        {groups.map((element) => (
          <div key={element.id}>
            <h3>{element.name}</h3>
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
