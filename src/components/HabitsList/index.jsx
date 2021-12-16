import { useContext, useState } from "react";
import { HabitsContext } from "../../providers/Habits";
import CloseButton from "../CloseButton";
import EditButton from "../EditButton";
import Modal from "../Modal";
import {
  CardBody,
  CardContainer,
  CardImage,
  CardInfo,
  AddHabit,
} from "./styles";

const HabitsList = () => {
  const { habits, HabitDelete, HabitsList } = useContext(HabitsContext);

  const handleClose = (habitId) => {
    HabitDelete(habitId);
    HabitsList();
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      {habits?.length > 0 ? (
        habits.map((habit) => (
          <CardContainer key={habit.id}>
            <div>
              <h3>{habit.title}</h3>
              <span>
                <CloseButton onClick={() => handleClose(habit.id)}>
                  Delete
                </CloseButton>
                <EditButton onClick={() => setOpen(true)}>Edit</EditButton>
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
            <h3>Seus Habitos serao exibidos aqui</h3>
          </CardBody>
        </AddHabit>
      )}
      <Modal open={open} setOpen={setOpen}>
        {<h1>TESTE</h1>}
      </Modal>
    </>
  );
};

export default HabitsList;
