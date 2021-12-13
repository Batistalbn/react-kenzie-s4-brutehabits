import { useContext } from "react";
import { Link } from "react-router-dom";
import { GroupsContext } from "../../providers/Groups";
import { Header, Pages } from "./styles";
import PageButton from "../PageButton";
import AddButton from "../AddButton";
import SubmitButton from "../SubmitButton";

const GroupsList = () => {
  const { groups, nextPage, previousPage, page, setFilter, handleClick } =
    useContext(GroupsContext);

  return (
    <div>
      <Header>
        <div>
          <h1>Grupos</h1>
          <AddButton />
        </div>
        <input
          placeholder="Pesquisar"
          onChange={(e) => setFilter(e.target.value)}
        />
        <SubmitButton onSubmit={handleClick} />
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
        <PageButton left onClick={previousPage} />
        <p>{page}</p>
        <PageButton right onClick={nextPage} />
      </Pages>
    </div>
  );
};

export default GroupsList;
