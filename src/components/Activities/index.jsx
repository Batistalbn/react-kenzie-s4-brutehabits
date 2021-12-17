import { useContext, useState } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../AddButton";
import Modal from "../Modal";
import ActivitiesSignup from "../ActivitiesSignup";

const Activities = ({ element }) => {
  const { DeleteActivities } = useContext(ActivitiesContext);
  const { displayGroup } = useContext(GroupsContext);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <p>Atividades</p>
        <AddButton
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
      {displayGroup.activities?.map((element) => (
        <div key={element.id}>
          <p>{element.title}</p>
          <p>{element.realization_time}</p>
          <div>
            <button>Editar</button>

            <button
              onClick={() => {
                DeleteActivities(element.id);
              }}
            >
              Deletar Meta
            </button>
          </div>
        </div>
      ))}
      <Modal open={open} setOpen={setOpen}>
        <ActivitiesSignup setOpes={setOpen} />
      </Modal>
    </div>
  );
};

export default Activities;
