import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import Goals from "../Goals";
import Activities from "../Activities";

const Group = () => {
  const { displayGroup, Subscribe, Unsubscribe } = useContext(GroupsContext);

  return (
    <div>
      <div>
        <div>
          <h2>{displayGroup.name}</h2>
          <p>{displayGroup.category}</p>
        </div>
        <button
          onClick={() => {
            Subscribe(displayGroup.id);
          }}
        >
          Inscrever-se
        </button>
      </div>
      <div>
        <p>{displayGroup.description}</p>
        <p>{displayGroup.users_on_group?.length}</p>
      </div>

      <Goals />
      <Activities />

      <button
        onClick={() => {
          Unsubscribe(displayGroup.id);
        }}
      >
        Sair
      </button>
    </div>
  );
};

export default Group;
