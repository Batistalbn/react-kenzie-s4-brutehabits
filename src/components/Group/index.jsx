import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../providers/User";
import api from "../../services/api";

const Group = () => {
  const [group, setGroup] = useState({});
  const { id } = useParams();
  const { token } = useContext(UserContext);

  useEffect(() => {
    api
      .get(`/groups/${id}`, { Authorization: `Bearer ${token}` })
      .then((response) => setGroup(response));
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
