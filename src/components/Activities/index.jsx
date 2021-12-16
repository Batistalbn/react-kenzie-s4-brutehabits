import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../AddButton";

const Activities = ({ element }) => {
  const { DeleteActivities } = useContext(ActivitiesContext);
  const { displayGroup } = useContext(GroupsContext);

  return (
    <div>
      <div>
        <p>Atividades</p>
        <AddButton />
      </div>
      {displayGroup.activities?.map((element) => (
        <div key={element.id}>
          <div>
            <p>{element.title}</p>
            <button>Editar</button>
          </div>
          <p>{element.realization_time}</p>
          <button
            onClick={() => {
              DeleteActivities(element.id);
            }}
          >
            Deletar Meta
          </button>
        </div>
      ))}
    </div>
  );
};

export default Activities;
