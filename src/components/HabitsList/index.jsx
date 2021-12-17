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
  CardHeader,
} from "./styles";
import Hobbies from "../../assets/Hobbies.png";
import Lazer from "../../assets/Lazer.png";
import SelfCare from "../../assets/SelfCare.png";
import Trabalo from "../../assets/Trabalho.png";
import Default from "../../assets/Default.png";

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

  // const categoryImg = (category) => {
  //   switch (category) {
  //     case "Hobbies":
  //       <Hobbies style={{ color: "red" }}></Hobbies>;
  //       break;
  //     case "Lazer":
  //       <Lazer style={{ color: "red" }}></Lazer>;
  //       break;
  //     case "SelfCare":
  //       <SelfCare style={{ color: "red" }}></SelfCare>;
  //       break;
  //     case "Trabalho":
  //       <Trabalho style={{ color: "red" }}></Trabalho>;
  //       break;
  //     default:
  //       <Default style={{ color: "red" }} />;
  //       break;
  //   }
  // };

  useEffect(() => {
    HabitsList();
  }, [habits]);

  return (
    <>
      {habits?.length > 0 ? (
        habits.map((habit) => (
          <CardContainer key={habit.id}>
            <CardHeader>
              <h3>{habit.title}</h3>
              <span>
                <EditButton onClick={() => handleEdit(habit.id)}>
                  Edit
                </EditButton>
                <CloseButton onClick={() => handleClose(habit.id)}>
                  Delete
                </CloseButton>
              </span>
            </CardHeader>
            <CardBody>
              <CardImage>
                <img src={habit.category} alt={habit.category} />
              </CardImage>
              <CardInfo>
                <p>Dificuldade :</p>
                <span>{habit.difficulty}</span>
                <p>Frequencia :</p>
                <span>{habit.frequency}</span>
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
        <HabitEdit open={openEdit} setOpen={setOpenEdit} />
      </Modal>
    </>
  );
};

export default HabitsList;
