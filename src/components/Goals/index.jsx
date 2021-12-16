import { GoalsContext } from "../../providers/Goals";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../AddButton";
import { useContext, useState } from "react";
import Modal from "../Modal";
import GoalsSignup from "../GoalsSignup";

const Goals = () => {
  const { DeleteGoals } = useContext(GoalsContext);
  const { displayGroup } = useContext(GroupsContext);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <p>Metas</p>
        <AddButton
          onClick={() => {
            setOpen(true);
          }}
        />{" "}
      </div>
      {displayGroup.goals?.map((element) => (
        <div key={element.id}>
          <div>
            <p>{element.title}</p>
            <button>Editar</button>
          </div>
          <p>{element.difficulty}</p>
          <p>{element.achieved}</p>
          <button
            onClick={() => {
              DeleteGoals(element.id);
            }}
          >
            Deletar Meta
          </button>
        </div>
      ))}

      <Modal open={open} setOpen={setOpen}>
        <GoalsSignup setOpes={setOpen} />
      </Modal>
    </div>
  );
};

export default Goals;
