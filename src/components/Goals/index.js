import { GoalsContext } from "../../providers/Goals";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../AddButton";
import { useContext } from "react";

const Goals = () => {
  const { DeleteGoals } = useContext(GoalsContext);
  const { displayGroup } = useContext(GroupsContext);

  return (
    <div>
      <div>
        <p>Metas</p>
        <AddButton />
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
    </div>
  );
};

export default Goals;
