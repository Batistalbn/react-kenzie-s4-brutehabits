import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";

const GroupsList = () => {
  const { groups, accessGroup } = useContext(GroupsContext);

  return (
    <div>
      {groups.map((element) => (
        <div key={element.id}>
          <h3
            onClick={() => {
              accessGroup(element);
            }}
          >
            {element.name}
          </h3>
          <p>{element.category}</p>
          <p>{element.description}</p>
          <span>Membros: {element.users_on_group?.length}</span>
        </div>
      ))}
    </div>
  );
};

export default GroupsList;
