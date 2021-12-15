import { useContext, useEffect } from "react";
import { GroupsContext } from "../../providers/Groups";
import { GoalsContext } from "../../providers/Goals";
import { UserContext } from "../../providers/User";
import { ActivitiesContext } from "../../providers/Activities";

import AddButton from "../AddButton";
import api from "../../services/api";

const Group = () => {
  const { displayGroup, Subscribe } = useContext(GroupsContext);
  const { goals, setGoals, DeleteGoals } = useContext(GoalsContext);
  const { activities, setActivities, DeleteActivities } =
    useContext(ActivitiesContext);
  const { token } = useContext(UserContext);

  const getGoals = () => {
    api
      .get(`/goals/?group=${displayGroup.id}`, {
        Authorization: `Bearer ${token}`,
      })
      .then((response) => {
        setGoals(response.data.results);
      });
  };

  const getActivities = () => {
    api
      .get(`/activities/?group=${displayGroup.id}`, {
        Authorization: `Bearer ${token}`,
      })
      .then((response) => {
        setActivities(response.data.results);
      });
  };

  useEffect(() => {
    getGoals();
    getActivities();
  }, []);

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

      <div>
        <div>
          <p>Metas</p>
          <AddButton />
        </div>
        {goals.map((element) => (
          <div>
            <div>
              <p>{element.title}</p>
              <button>Editar</button>
            </div>
            <p>{element.title}</p>
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

      <div>
        <div>
          <p>Atividades</p>
          <AddButton />
        </div>
        {activities.map((element) => (
          <div>
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
    </div>
  );
};

export default Group;
