import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import GroupCard from "../GroupCard";
const GroupsList = () => {
  const { groups, accessGroup } = useContext(GroupsContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {groups?.map((element) => (
        <GroupCard
          key={element.id}
          onClick={() => {
            accessGroup(element);
          }}
          {...element}
        />
      ))}
    </div>
  );
};

export default GroupsList;
