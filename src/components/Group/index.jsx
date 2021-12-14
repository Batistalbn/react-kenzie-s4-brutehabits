import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const Group = () => {
  const [group, setGroup] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.get(`/groups/${id}`).then((response) => setGroup(response));
  }, []);

  return (
    <div>
      <div>
        <h2 style={{ color: "#fff" }}>{group.name}</h2>
      </div>
    </div>
  );
};

export default Group;
