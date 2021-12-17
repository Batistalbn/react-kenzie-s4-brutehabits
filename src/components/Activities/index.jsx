import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../AddButton";
import EditButton from "../EditButton";
import CloseButton from "../CloseButton";

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
            <EditButton>Editar</EditButton>
          </div>
          <p>{element.realization_time}</p>
          <CloseButton
            onClick={() => {
              DeleteActivities(element.id);
            }}
          >
            Deletar Meta
          </CloseButton>
        </div>
      ))}
    </div>
  );
};

export default Activities;
