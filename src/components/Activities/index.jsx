import { useContext, useState } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { GroupsContext } from "../../providers/Groups";
import AddButton from "../AddButton";
import EditButton from "../EditButton";
import CloseButton from "../CloseButton";
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
      <Modal open={open} setOpen={setOpen}>
        <ActivitiesSignup setOpes={setOpen} />
      </Modal>
    </div>
  );
};

export default Activities;
