import { useContext } from "react";
import { Link } from "react-router-dom";
import { GroupsContext } from "../../providers/Groups";
import { Header, Pages } from "./styles";
import PageButton from "../PageButton";
import AddButton from "../AddButton";
import SubmitButton from "../SubmitButton";
import Button from "../Button";
import api from "../../services/api";
import toast from "react-hot-toast";

const GroupsList = () => {
  const {
    groups,
    nextPage,
    previousPage,
    page,
    setFilter,
    handleClick,
    Subscriptions,
  } = useContext(GroupsContext);

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

  return (
    <div>
      <Header>
        <div>
          <h1>Grupos</h1>
          <AddButton />
          <Button onClick={Subscriptions}>Meus grupos</Button>
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
            <Button
              onClick={() => {
                Subscribe(element.id);
              }}
            >
              Inscrever-se
            </Button>
            <Button
              onClick={() => {
                Unsubscribe(element.id);
              }}
            >
              Sair
            </Button>
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
