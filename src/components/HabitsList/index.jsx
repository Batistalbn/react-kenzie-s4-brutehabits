import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../../providers/Habits";
import CloseButton from "../CloseButton";
import EditButton from "../EditButton";
import HabitEdit from "../HabitEdit";
import Modal from "../Modal";
import {
  CardBody,
  CardContainer,
  CardImage,
  CardInfo,
  AddHabit,
} from "./styles";

const HabitsList = () => {
  const { habits, HabitDelete, HabitsList, setHabitID } =
    useContext(HabitsContext);

  const [openEdit, setOpenEdit] = useState(false);
  const handleClose = (habitId) => {
    HabitDelete(habitId);
    HabitsList();
  };

  const handleEdit = async (habitId) => {
    await setHabitID(habitId);
    setOpenEdit(true);
  };

  useEffect(() => {
    HabitsList();
  }, [habits]);

  return (
    <>
      {habits?.length > 0 ? (
        habits.map((habit) => (
          <CardContainer key={habit.id}>
            <div>
              <h3>{habit.title}</h3>
              <span>
                <EditButton onClick={() => handleEdit(habit.id)}>
                  Edit
                </EditButton>
                <CloseButton onClick={() => handleClose(habit.id)}>
                  Delete
                </CloseButton>
              </span>
            </div>
            <CardBody>
              <CardImage>
                <img src="" alt="Categoria"></img>
                <figcaption>{habit.category}</figcaption>
              </CardImage>
              <CardInfo>
                <p>Dificuldade : {habit.difficulty}</p>
                <p>Frequencia : {habit.frequency}</p>
              </CardInfo>
            </CardBody>
          </CardContainer>
        ))
      ) : (
        <AddHabit>
          <CardBody>
            <h3>Seus hábitos serão exibidos aqui</h3>
          </CardBody>
        </AddHabit>
      )}
      <Modal open={openEdit} setOpen={setOpenEdit}>
        <HabitEdit />
      </Modal>
    </>
  );
};

export default HabitsList;
