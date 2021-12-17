import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import Goals from "../Goals";
import Activities from "../Activities";
import Button from "../Button";
import { Container } from "./styles";

const Group = () => {
  const { displayGroup, Subscribe, Unsubscribe } = useContext(GroupsContext);

  return (
    <Container>
      <div>
        <div>
          <h2>{displayGroup.name}</h2>
          <p>Categoria: {displayGroup.category}</p>
        </div>
        <Button
          thin="true"
          onClick={() => {
            Subscribe(displayGroup.id);
          }}
        >
          Inscrever-se
        </Button>
      </div>
      <div>
        <p>{displayGroup.description}</p>
        <p>Participantes: {displayGroup.users_on_group?.length}</p>
      </div>

      <Goals />
      <Activities />

      <Button
        thin="true"
        onClick={() => {
          Unsubscribe(displayGroup.id);
        }}
      >
        Sair
      </Button>
    </Container>
  );
};

export default Group;
