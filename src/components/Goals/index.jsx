import { GoalsContext } from "../../providers/Goals";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../AddButton";
import { useContext, useState } from "react";
import Modal from "../Modal";
import GoalsSignup from "../GoalsSignup";
import CloseButton from "../CloseButton";
import EditButton from "../EditButton";
import { Container } from "./styles";

const Goals = () => {
  const { DeleteGoals } = useContext(GoalsContext);
  const { displayGroup } = useContext(GroupsContext);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div>
        <p>Metas</p>
        <AddButton
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
      {displayGroup.goals?.map((element) => (
        <div key={element.id}>
          <div>
            <p>{element.title}</p>
            <EditButton>Editar</EditButton>
          </div>
          <p>{element.difficulty}</p>
          <p>{element.achieved}</p>
          <CloseButton
            onClick={() => {
              DeleteGoals(element.id);
            }}
          >
            Deletar Meta
          </CloseButton>
        </div>
      ))}

      <Modal open={open} setOpen={setOpen}>
        <GoalsSignup setOpes={setOpen} />
      </Modal>
    </Container>
  );
};

export default Goals;
